import Vue from 'vue'
import Router from 'vue-router'
//顶部进度条
import NProgress from 'nprogress'
process.env.NODE_ENV === 'development' && import ('nprogress/nprogress.css')

Vue.use(Router)
import Layout from '../layout'

// 通用routers
export const currencyRoutes = [
	{
		path: '/',
		name: 'Home',
		component: Layout,
		redirect: '/homePage',
		children: [
			{
				path: 'homePage',
				name: 'HomePage',
				component: () => import('views/homePage'),
				meta: {
					title: '首页',
					icon: 'el-icon-s-data'
				}
			}
		]
	},
	{
		path: '/personal',
		name: 'Personal',
		component: Layout,
		redirect: '/personal/index',
		hidden: true,
		children: [
			{
				path: 'index',
				name: 'Personal-index',
				component: () => import('views/personal'),
				meta: {
					title: '个人中心'
				}
			}
		]
	},
	{
		path: '/userManager',
		name: 'UserManager',
		component: Layout,
		redirect: '/userManager/index',
		children: [
			{
				path: 'index',
				name: 'UserManager-index',
				component: () => import('views/userManager'),
				meta: {
					title: '用户管理',
					icon: 'el-icon-user-solid'
				}
			}
		]
	},
  {
    path: '/fundManage',
    name: 'FundManage',
		component: Layout,
    redirect: '/fundManage/fundList',
    meta: { icon: 'el-icon-s-shop', title: '资金管理' },
    children: [
      {
        path: 'fundList',
        name: 'FundList',
        component: () => import('@/views/fundManage/fundList'),
        meta: { title: '资金流水' }
      },
      {
        path: 'chinaTabsList',
        name: 'ChinaTabsList',
        component: () => import('@/views/fundManage/chinaTabsList'),
        meta: { title: '区域投资' }
      }
    ]
  }
]

const createRouter = () => {
	return new Router({
		mode: 'history',
		routes: currencyRoutes,
		scrollBehavior() {
			return {
				x: 0,
				y: 0
			}
		}
	})
}

const router = createRouter()

router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router
