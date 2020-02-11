<template>
	<div class="pagemain el-scrollbar" ref="pagemain">
		<v-tag></v-tag>
		<div class="mainWrapper">
			<router-view></router-view>
		</div>
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
