<template>
  <div class="zheader">
    <div class="zh-pro-logo">
      <a href="javascript:;">
        <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyLzkxNDkxMmIzMTM1YzZhYjZmZGE2MWUxNjdjNWY2ZjE2LTgwLndlYnA_p_p100_p_3D.webp">
      </a>
    </div>
    <el-menu
      :default-active="getHeaderMenuActive"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#333"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">模版</template>
        <el-menu-item index="2-1">响应式网站</el-menu-item>
        <el-menu-item index="2-2">小程序</el-menu-item>
        <!--        <el-submenu index="2-4">-->
        <!--          <template slot="title">选项4</template>-->
        <!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
        <!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
        <!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--        </el-submenu>-->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">套餐</template>
        <el-menu-item index="3-1">套餐价格</el-menu-item>
        <el-menu-item index="3-2">智能客服</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">案例</el-menu-item>
      <el-submenu index="5">
        <template slot="title">文档</template>
        <el-menu-item index="5-1">教程中心</el-menu-item>
        <el-menu-item index="5-2">建站资讯</el-menu-item>
        <el-menu-item index="5-3">更新日志</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">工具</el-menu-item>
    </el-menu>
    <div class="el-menu-demo rt-incon">
      <font-icon :IconClass="'fa fa-user-o'"></font-icon>
    </div>
  </div>
</template>

<script>
import './z-header.less'
export default {
  name: 'zheader',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$cookies.set('headermenuactive', key)
    }
  },
  computed: {
    getHeaderMenuActive () {
      return this.$cookies.get('headermenuactive') ? this.$cookies.get('headermenuactive') : this.headermenuActive
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
</style>
