import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import animated from 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './lang'

Vue.use(animated)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	i18n,
  render: h => h(App),
}).$mount('#app')
