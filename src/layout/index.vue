<template>
	<div class="wrapper" :class="{ closeBar: opened }">
		<h-header></h-header>
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
import {mapGetters} from 'vuex'
export default {
	name: 'layout',
	components: {
		SideBar,
		HHeader,
		PageMain
	},
	computed: {
		...mapGetters(['opened'])
}
}
</script>
