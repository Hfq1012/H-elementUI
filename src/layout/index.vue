<template>
	<div class="wrapper" :class="{ closeBar: opened }">
		<h-header></h-header>
		<transition
				enter-active-class="animated bounceInRight"
				leave-active-class="animated bounceOutRight">
			<notificat-bar v-show="msgIsShow"></notificat-bar>
		</transition>
		<div class="wrapper_con">
			<side-bar></side-bar>
			<page-main></page-main>
		</div>
	</div>
</template>

<script>
import SideBar from './components/sideBar'
import HHeader from './components/header'
import PageMain from './components/pageMain'
import NotificatBar from '@/components/NotificatBar'
import {mapGetters} from 'vuex'
export default {
	name: 'layout',
	components: {
		SideBar,
		HHeader,
		PageMain,
		NotificatBar
	},
	computed: {
		...mapGetters(['opened','msgIsShow'])
}
}
</script>
