<template>
  <div class="siderCollapse">
    <i :class="{'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }"
        @click="toggleOpen()"
    ></i>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'sideCollapse',
    computed: {
      ...mapGetters(['opened'])
    },
    methods: {
      toggleOpen() {
        this.$store.commit('app/SET_OPENED', !this.opened)
      }
    }
  }
</script>
<style lang="scss" scoped>
	.siderCollapse i {
		font-size: 18px;
		color: #363f44;
		cursor: pointer;
	}
</style>
