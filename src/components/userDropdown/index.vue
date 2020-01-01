<template>
  <div>
    <el-dropdown>
			<div class="userDrop">
				<span>admin<i class="el-icon-caret-bottom"></i></span>
				<img src="./user01.jpg" alt="user">
			</div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>
					<router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
				</el-dropdown-item>
				<el-dropdown-item>
					<router-link to="/personal"><i class="el-icon-s-custom"></i>我的主页</router-link>
				</el-dropdown-item>
				<el-dropdown-item divided>
					<a><i class="el-icon-switch-button"> 退出</i></a>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
  </div>
</template>

<script>
export default {

}
</script>
