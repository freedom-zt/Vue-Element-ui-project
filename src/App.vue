<template>
  <div id="app">
    <TopBar></TopBar>
    <el-row type="flex">
      <NavMenu></NavMenu>
      <Container></Container>
    </el-row>
    <aboutme></aboutme>
  </div>
</template>

<script>
import './components/common/style.scss'
import TopBar from './components/common/TopBar.vue'
import NavMenu from './components/common/NavMenu.vue'
import Container from './components/common/Container.vue'
import aboutme from './components/common/aboutme.vue'

export default {
  components: {
    TopBar, NavMenu, Container, aboutme
  }
}
</script>
