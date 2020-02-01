<template>
  <div class="login">
    <div class="slideShadow" v-show="showSlide">
      <transition>
        <div class="slideSty animated bounce">
          <slide-verify
              @success="onSuccess"
              @fail="onFail"
              :sliderText="text"
              :w="350" :h="175"
              ref="slideDiv"></slide-verify>
          <div class="iconBtn">
            <i class="el-icon-circle-close" @click="showSlide = false"></i>
            <i class="el-icon-refresh" @click="refresh"></i>
          </div>
        </div>
      </transition>
    </div>
    <div class="loginBox">
      <h2 class="loginH2">Vue 后台管理系统</h2>
      <el-form :model="ruleForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input
              placeholder="请输入账号"
              prefix-icon="el-icon-user"
              v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="ruleForm.password"
              show-password></el-input>
        </el-form-item>
        <el-button type="primary" @click="loginYz('loginForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import SlideVerify from '@/components/slideVerify';
  export default {
    name: 'login',
    data() {
      return {
        notifyObj: null,
        showSlide: false,
        text:"向右滑动",
        ruleForm: {
          username: 'admin',
          password: '123456'
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {max: 15, min: 3, message: '长度在3-15个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {max: 20, min: 6, message: '长度在6-20个字符', trigger: 'blur'}
          ]
        }
      }
    },
    components: {
      SlideVerify
    },
    mounted() {
      this.showTip()
    },
    methods: {
      onSuccess() {
        this.showSlide = false
				this._login()
      },
      onFail() {
        this.$message.error('验证失败！')
      },
      refresh() {
        this.$refs.slideDiv.reset()
      },
      loginYz(form) {
        this.$refs[form].validate(valid => {
          if(valid) {
            this.showSlide = true;
          }
          return false
        })
      },
			_login() {
        this.$message.success('登录成功');
        localStorage.setItem('user/_getInfo', this.ruleForm);
        this.$router.push('/');
        if (this.notifyObj) {
          this.notifyObj.close()
        }
        this.notifyObj = null
      },
      showTip() {
        this.notifyObj = this.$notify({
          title: '提示',
          message: '输入任意用户名和密码即可',
          duration: '0',
          iconClass: 'el-icon-s-opportunity'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    background: url("./bg.png") no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .loginBox {
    position: relative;
    width: 420px;
    height: 348px;
    margin: 0 auto;
    background-color: rgba(0,0,0,.2);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
    text-align: center;
  }
  .loginH2 {
    font-size: 30px;
    padding: 30px 0 10px 0;
    color: #fff;
  }
  .el-form {
    padding: 25px 25px 30px 25px;
    border-radius: 0 0 4px 4px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .el-button {
    width: 100%;
  }

  .slideShadow {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .slideSty {
    position: absolute;
    width: 380px;
    height: 311px;
    background: #e8e8e8;
    border: 1px solid #dcdcdc;
    left: 50%;
    top: 50%;
    margin-left: -188px;
    margin-top: -176px;
    z-index: 99;
    border-radius: 5px;
  }
  .iconBtn {
    padding: 9px 0 0 19px;
    color: #5f5f5f;
    border-top: 1px solid #d8d8d8;
    margin-top: 17px;
    i {
      font-size: 22px;
      cursor: pointer;
    }
    i:last-child {
      margin-left: 7px;
    }
  }
  .slideSty .slide-verify {
    margin: 13px auto 0 auto;
    width: 350px !important;
  }

  .slideSty .slide-verify-refresh-icon {
    display: none;
  }
</style>
<style>
  .el-icon-user:before,.el-icon-lock:before,.el-icon-view:before {
    font-size: 18px !important;
  }
  .slideSty .slide-verify-slider {
    width: 100% !important;
  }
	.el-input__inner {
		background: rgba(255,255,255,.2);
		color: #fff;
	}
</style>
