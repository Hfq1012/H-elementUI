<template>
	<div class="pagemain el-scrollbar" ref="pagemain">
		<router-view></router-view>
		<foot-nav></foot-nav>
		<back-top :ele="$refs.pagemain"></back-top>
	</div>
</template>

<script>
	import FootNav from '../footNav';
	import BackTop from '@/components/backTop';
	export default {
		name: 'pageMain',
		components: {
			FootNav,
			BackTop
		}
	}
</script>
