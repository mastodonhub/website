<template>
  <el-container>
    <el-header class="transition-box hidden-xs-only" :style="{height: 'auto'}">
      <z-header></z-header>
    </el-header>
    <m-header class="hidden-sm-only"></m-header>
    <el-main>
      <router-view></router-view>
      <z-footer></z-footer>
    </el-main>
  </el-container>
</template>

<script>
import footer from './zfooter/zfooter'
import header from './zheader/zheader'
import Mheader from './mheader/mheader'
export default {
  name: 'layout',
  components: {
    'z-header': header,
    'z-footer': footer,
    'm-header': Mheader
  }
}
</script>

<style lang="less">
  .el-container.is-vertical {
    height: 100%;
  }
  .el-main {
    padding: 0;
  }
</style>
