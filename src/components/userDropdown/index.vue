<template>
  <div>
    <el-dropdown>
			<div class="userDrop">
				<span>{{ $t('com.admin') }}<i class="el-icon-caret-bottom"></i></span>
				<img src="./user01.jpg" alt="user">
			</div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>
					<router-link to="/"><i class="el-icon-s-home"></i>{{ $t('com.home') }}</router-link>
				</el-dropdown-item>
				<el-dropdown-item>
					<router-link to="/personal"><i class="el-icon-s-custom"></i>{{ $t('com.personal') }}</router-link>
				</el-dropdown-item>
				<el-dropdown-item divided>
					<a @click="_loginOut()"><i class="el-icon-switch-button">  {{ $t('com.quit') }}</i></a>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
  </div>
</template>

<script>
export default {
	methods: {
		_loginOut() {
			this.$store.dispatch('user/loginOut')
		}
	}
}
</script>
