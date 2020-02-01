<template>
  <div class="sidebar">
    <el-scrollbar>
      <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          background-color="#3a3f51"
          text-color="#b5b6bd"
          active-text-color="rgb(79, 148, 212)"
          mode="vertical"
          :collapse-transition="false"
          :collapse="opened"
      >
        <sidebar-item
            v-for="item in currencyRoutes"
            :key="item.path"
            :item="item"
            :basePath="item.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import SidebarItem from "./sideBarItem";
  import {mapGetters} from 'vuex';
  import {currencyRoutes} from '@/router';

  export default {
    components: {
      SidebarItem
    },
		computed: {
      ...mapGetters(['routes','opened']),
      currencyRoutes() {
        return currencyRoutes;
      },
			activeMenu() {
				return this.$route.path
			}
		}
  }
</script>
