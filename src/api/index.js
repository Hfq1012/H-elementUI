import axios from 'axios'
import Vue from 'vue'
import store from '@/store'
// import router from '@/router'
import {Loading} from 'element-ui'
import Qs from 'qs'

const baseUrl = process.env.NODE_ENV === 'development' ? 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/' : 'https://produce.com'

const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

const $axios = axios.create({
  baseURL: baseUrl,
  tiomout: 3000
})

Vue.prototype.$http = $axios

let loading = null

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    loading = Loading.service({ text: '拼命加载中' })
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
$axios.interceptors.response.use(
  response => {
    if (loading) {
      loading.close()
    }
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    let errorInfo = error.response
    if (loading) {
      loading.close()
    }
    if (!errorInfo) {
      // switch (error.response.status) {
      //   case 401:
      //     // 返回401 清除token信息并跳转到登陆页面
      //     store.commit('DEL_TOKEN')
      //     router.replace({
      //       path: '/login',
      //       query: {
      //         redirect: router.currencyRoutes.fullPath
      //       }
      //     })
      //     break
      //   case 404:
      //     Message.error('网络请求不存在')
      //     break
      //   default:
      //     Message.error(error.response.data.message)
      // }
      
      const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
      errorInfo = {
        statusText,
        status,
        request: { responseURL: config.url }
      }
    } else {
      // // 请求超时或者网络有问题
      // if (error.message.includes('timeout')) {
      //   Message.error('请求超时！请检查网络是否正常')
      // } else {
      //   Message.error('请求失败，请检查网络是否已连接')
      // }
      addErrorLog(errorInfo)
    }
    return Promise.reject(error)
  }
)

// get，post请求方法
export default {
  post(url, data) {
    return $axios({
      method: 'post',
      url,
      data: Qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url, params) {
    return $axios({
      method: 'get',
      url,
      params
    })
  }
}
