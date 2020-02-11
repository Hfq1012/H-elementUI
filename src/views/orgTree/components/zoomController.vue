<template>
  <div class="zoom-wrapper">
    <i class="el-icon-minus" @click="scale('down')"></i>
    <span class="zoom-number">{{ value }}%</span>
    <i class="el-icon-plus" @click="scale('up')"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 20
    },
    min: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 200
    }
  },
  methods: {
    scale(type) {
      const zoom = this.value + (type === 'down' ? -this.step: this.step)
      if((zoom < this.min && type === 'down') || (zoom > this.max && type === 'up')) {
        return
      }
      this.$emit('input', zoom)
    }
  }
}
</script>
<style lang="scss" scoped>
  i {
    font-size: 16px;
    background-color: #9DA2AC;
    border-radius: 50%;
    color: #fff;
    padding: 4px;
    &:active {
      box-shadow: 0px 0px 2px 2px rgba(218, 220, 223, 0.2) inset;
    }
    &:hover {
      background: #1890ff;
    }
  }
  .zoom-number {
    color: #657180;
    padding: 0 8px;
    display: inline-block;
    text-align: center;
    width: 30px;
  }
</style>