<template>
	<div class="pagemain el-scrollbar" ref="pagemain">
		<v-tag></v-tag>
		<router-view></router-view>
		<foot-nav></foot-nav>
		<back-top :ele="$refs.pagemain"></back-top>
	</div>
</template>

<script>
	import VTag from '../vTag';
	import FootNav from '../footNav';
	import BackTop from '@/components/backTop';
	export default {
		name: 'pageMain',
		components: {
			VTag,
			FootNav,
			BackTop
		}
	}
</script>
