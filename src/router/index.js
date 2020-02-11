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
		path: '/components',
		name: 'Components',
		component: Layout,
		redirect: '/components/countTo',
		meta: { icon: 'el-icon-s-management', title: '组件' },
		children: [
			{
				path: 'countTo',
				name: 'CountTo',
				component: () => import('@/views/countTo'),
				meta: { title: '数字渐变' }
			},
			{
				path: 'dragList',
				name: 'dragList',
				component: () => import('@/views/dragList'),
				meta: { title: '拖拽列表' }
			},
			{
				path: 'dragDrawer',
				name: 'DragDrawer',
				component: () => import('@/views/dragDrawer'),
				meta: { title: '可拖动抽屉' }
			},
			{
				path: 'orgTree',
				name: 'OrgTree',
				component: () => import('@/views/orgTree'),
				meta: { title: '组织树结构' }
			},
			{
				path: 'upload',
				name: 'Upload',
				component: () => import('@/views/upload'),
				meta: { title: '文件上传' }
			},
			{
				path: 'tables',
				name: 'Tables',
				component: () => import('@/views/tables'),
				meta: { title: '多功能表格' }
			},
			{
				path: 'splitPane',
				name: 'SplitPane',
				component: () => import('@/views/splitPane'),
				meta: { title: '分割窗口' }
			},
			{
				path: 'editor',
				name: 'Editor',
				component: () => import('@/views/editor'),
				meta: { title: '富文本编辑器' }
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
