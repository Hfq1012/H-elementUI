<template>
  <div>
    <i class="el-icon-full-screen iconFont" @click="toggleFull"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  data() {
    return {
      isFullscreen: false
    }
  },
  methods: {
		toggleFull() {
			if(!screenfull.isEnabled) {
				this.$message({
					type: 'warning',
					message: 'you browser can not work'
				})
				return false
			}
			screenfull.toggle()
		}
	}
}
</script>
