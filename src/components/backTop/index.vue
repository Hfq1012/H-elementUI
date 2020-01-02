<template>
  <div
      class="backTop"
      :style="{'opacity':opacity}"
      v-show="gotop"
      @mouseover="enterBackTop"
      @mouseout="outBackTop"
      @click="handleScrollTop()"
      >
      <div class="back"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        opacity: '0.3',
        gotop: false,
        scrollHeight: 100
      }
    },
    props: ['ele'],
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
    },
    methods: {
      enterBackTop() {
        this.opacity = '1';
      },
      outBackTop() {
        this.opacity = '0.3';
      },
      handleScroll(e) {
        let scrolltop = e.target.scrollTop;
        scrolltop > this.scrollHeight ? (this.gotop = true):(this.gotop = false);
      },
      handleScrollTop() {
          this.$nextTick(() => {
            this.ele.scrollTop = 0;
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .backTop {
    position: fixed;
    right: 50px;
    bottom: 50px;
    padding: 0 !important;
    background: transparent !important;
    cursor: pointer;
    .back {
      background: #1890ff url("../../assets/images/backTop.png") center no-repeat;
      background-size: 16px;
      width: 40px;
      height: 40px;
      overflow: hidden;
      color: #fff;
      text-align: center;
      border-radius: 50%;
      transition: all .3s;
      box-shadow: 0 0 15px 1px rgba(69,65,78,.1);
    }
  }
</style>