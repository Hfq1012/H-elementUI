<template>
	<div class="header">
		<div class="header_l">
			<a href="javascript:;" class="logo">
				<img src="./logo.png" alt="logo">Vue Project
			</a>
		</div>
		<div class="header_r">
			<div class="header_d1">
				<side-collapse class="sidecoll"></side-collapse>
				<bread-crumb class="breadcrumb"></bread-crumb>
			</div>
			<div class="header_d2">
				<ul class="headerUl clearFixed">
					<li>
						<el-badge is-dot>
							<i class="el-icon-message-solid iconFont"></i>
						</el-badge>
					</li>
					<li>
						<full-screen/>
					</li>
					<li>
						<user-dropdown/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import SideCollapse from '@/components/sideCollapse'
import BreadCrumb from '@/components/breadCrumb'
import FullScreen from '@/components/fullScreen'
import UserDropdown from '@/components/userDropdown'
export default {
	components: {
		SideCollapse,
		BreadCrumb,
		FullScreen,
		UserDropdown
	}
}
</script>
