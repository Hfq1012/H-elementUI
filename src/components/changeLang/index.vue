<template>
  <div>
    <p :class="[active? 'ZH':'EN']" @click="changeLangEvent()">
      <span class="zh">{{ $t('com.zh') }}</span>/<span class="en">{{ $t('com.en') }}</span>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: ''
      }
    },
    methods: {
      changeLangEvent() {
        if ( this.lang === 'zh' ) {
          this.lang = 'en';
          this.$i18n.locale = this.lang;//关键语句
          this.active = false;
        }else {
          this.lang = 'zh';
          this.$i18n.locale = this.lang;//关键语句
          this.active = true;
        }
        // this.$confirm('确定切换语言吗?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   if ( this.lang === 'zh' ) {
        //     this.lang = 'en';
        //     this.$i18n.locale = this.lang;//关键语句
        //     this.active = false;
        //   }else {
        //     this.lang = 'zh';
        //     this.$i18n.locale = this.lang;//关键语句
        //     this.active = true;
        //   }
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //   });
        // });
      }
    }
  }
</script>
<style lang="scss" scoped>
  p {
    width: 40px;
    text-align: center;
  }
  .ZH .zh {
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
  .EN .en {
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
</style>
