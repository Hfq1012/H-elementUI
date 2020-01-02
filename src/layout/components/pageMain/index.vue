<template>
	<div class="pagemain el-scrollbar" ref="pagemain">
		<router-view></router-view>
		<back-top :ele="$refs.pagemain"></back-top>
	</div>
</template>

<script>
	import BackTop from '@/components/backTop'
	export default {
		name: 'pageMain',
		components: {
			BackTop
		}
	}
</script>
