import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '../layout'

// 通用routers
export const currencyRoutes = [
	{
		path: '/',
		name: 'Home',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('views/dashboard'),
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
		path: '/driver',
		name: 'Driver',
		component: Layout,
		redirect: '/driver/index',
		children: [
			{
				path: 'index',
				name: 'Driver-index',
				component: () => import('views/driver-page'),
				meta: {
					title: '引导指南',
					icon: 'el-icon-s-flag'
				}
			}
		]
	},
  {
    path: '/echarts',
    component: Layout,
    name: 'Echarts',
    redirect: '/echarts/slide-chart',
    meta: { icon: 'el-icon-s-marketing', title: 'Echarts' },
    children: [
      {
        path: 'slide-chart',
        name: 'Sldie-chart',
        component: () => import('@/views/echarts/slide-chart'),
        meta: { title: '滑动charts' }
      },
      {
        path: 'dynamic-chart',
        name: 'Dynamic-chart',
        component: () => import('@/views/echarts/dynamic-chart'),
        meta: { title: '切换charts' }
      },
      {
        path: 'map-chart',
        name: 'Map-chart',
        component: () => import('@/views/echarts/map-chart'),
        meta: { title: 'map' }
      }
    ]
  }
]

const createRouter = () => {
	return new Router({
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

export default router
