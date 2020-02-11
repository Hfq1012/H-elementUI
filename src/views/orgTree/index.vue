<template>
  <div>
    <div class="plugins-tips">
      v-org-tree是一个基于Vue.js2封装的组织结构树组件，支持自定义节点和收缩按钮，高自由度定制，有水平和垂直两种方向。
      访问地址：<a href="https://github.com/lison16/v-org-tree" target="_blank">v-org-tree</a>
    </div> 
    <div class="zoom-box">
      <zoom-controller v-model="zoom" :min="20" :max="200"></zoom-controller>
    </div>
    <div class="org-box">
      <org-view v-if="data" :data="data" :zoom-handled="zoomHandled" @on-menu-click="handleMenuClick"></org-view>
    </div>
  </div>
</template>

<script>
import ZoomController from './components/zoomController'
import OrgView from './components/orgView'
import { getOrgData } from '@/api/data'
const menuDic = {
  edit: '编辑部门',
  detail: '查看部门',
  new: '新增子部门',
  delete: '删除部门'
}
export default {
  data() {
    return {
      zoom: 100,
      data: null
    }
  },
  components: {
    ZoomController,
    OrgView
  },
  computed: {
    zoomHandled() {
      return this.zoom / 100
    }
  },
  methods: {
    setDepartmentData(data) {
      data.isRoot = true
      return data
    },
    handleMenuClick({ data, key }) {
      this.$message.success({
        duration: 5,
        content: `点击了《${data.label}》节点的'${menuDic[key]}'菜单`
      })
    },
    getDepartmentData() {
      getOrgData().then(res => {
        const { data } = res
        this.data = data
      })
    }
  },
  mounted() {
    this.getDepartmentData()
  }
}
</script>
