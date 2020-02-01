import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'
//顶部进度条
import NProgress from 'nprogress'
process.env.NODE_ENV === 'development' && import ('nprogress/nprogress.css')

Vue.use(Router)

// 通用routers
export const currencyRoutes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('views/login'),
		meta: {
			title: '登录'
		},
		hidden: true
	},
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
		path: '/error',
		name: 'Error',
		component: Layout,
		redirect: '/errorPage/index',
		children: [
			{
				path: 'index',
				name: 'ErrorPage',
				component: () => import('views/errorPage'),
				meta: {
					title: '404错误',
					icon: 'el-icon-error'
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

export const asyncRoutes = [
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
// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = createRouter()
  router.matcher = reset.matcher
}

router.beforeEach((to, from, next) => {
	NProgress.start();
	document.title = `${to.meta.title} | vue-demo`;
	const role = localStorage.getItem('user/_getInfo');
	if (!role && to.path !== '/login') {
		next('/login');
	} else if (to.meta.permission) {
			// 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
			role === 'admin' ? next() : next('/403');
	} else {
		next();
	}
})

router.afterEach(() => {
	NProgress.done()
})


export default router
