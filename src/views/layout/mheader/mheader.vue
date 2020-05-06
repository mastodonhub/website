<template>
  <div id="mheader" class="hidden-sm-and-up">
    <el-row :gutter="10" justify="center">
      <el-col :span="2">
        <div class="siderbtn" @click="drawer = true">
          <font-icon :IconClass="'fa fa-bars'"></font-icon>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="logo">
          <img  src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyLzkxNDkxMmIzMTM1YzZhYjZmZGE2MWUxNjdjNWY2ZjE2LTgwLndlYnA_p_p100_p_3D.webp">
        </div>
      </el-col>
      <el-col :span="2">
        <div class="sideruser">
          <font-icon :IconClass="'fa fa-user'"></font-icon>
        </div>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      size="250px"
      :with-header="false"
      :before-close="handleClose">
      <div class="headerdrawer clearfix">
        <a href="javascript:;">登录</a>
        <a href="javascript:;">注册</a>
      </div>
      <div class="header-drawer-btn">
        <el-button type="info" round>
          客服热线 8888888
        </el-button>
      </div>
      <ul class="header-drawer-list">
        <li>
          <a href="javascript:;">首页</a>
        </li>
        <li>
          <a href="javascript:;">模版</a>
        </li>
        <li>
          <a href="javascript:;">套餐</a>
        </li>
        <li>
          <a href="javascript:;">案例</a>
        </li>
        <li>
          <a href="javascript:;">文档</a>
        </li>
        <li>
          <a href="javascript:;">工具</a>
        </li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
import './mheader.less'
export default {
  name: 'mheader',
  data () {
    return {
      drawer: false,
      direction: 'ltr'
    }
  },
  methods: {
    handleClose (done) {
      done()
    }
  }
}
</script>

<style scoped>

</style>
