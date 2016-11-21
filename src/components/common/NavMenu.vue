<template lang="html">
  <el-menu default-active="1" id="nav-menu" theme="dark">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-menu"></i>导航一</template>
      <el-menu-item index="1-1">
        <router-link to="/page1" class="nav-link">二级导航一</router-link>
      </el-menu-item>
      <el-menu-item index="1-2">
        <router-link to="/page2" class="nav-link">二级导航二</router-link>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>导航二</template>
      <el-menu-item index="2-1">
        <router-link to="/page3" class="nav-link">二级导航一</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/page4" class="nav-link">二级导航二</router-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <router-link to="/page5" class="nav-link"><i class="el-icon-message"></i>导航三</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/page6" class="nav-link"><i class="el-icon-message"></i>导航四</router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/page7" class="nav-link"><i class="el-icon-message"></i>导航五</router-link>
    </el-menu-item>
    <el-menu-item index="6">
      <router-link to="/page8" class="nav-link"><i class="el-icon-message"></i>导航六</router-link>
    </el-menu-item>
    <el-menu-item index="7">
      <router-link to="/page9" class="nav-link"><i class="el-icon-message"></i>导航七</router-link>
    </el-menu-item>
    <el-menu-item index="8">
      <router-link to="/page10" class="nav-link"><i class="el-icon-message"></i>导航八</router-link>
    </el-menu-item>
  </el-menu>
</template>

<style>
  #nav-menu {
    height: 960px;
    width: 150px;
    min-width: 150px;
  }
</style>
