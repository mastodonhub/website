<template>
  <div class="zh-lr" ref="homelistlr">
    <el-row :gutter="80">
      <el-col :xs="24" :sm="12">
        <div :class="ofsetHtClass">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3L2JjMDY2ODA2NTAzNDZjZTU5NjNhZjdhODE0MGE1ZmY1LTgwLndlYnA_p_p100_p_3D.webp" alt="">
        </div>
      </el-col>
      <el-col :xs="24" :sm="12">
        <h1 class="tit">
          基于H5模板，快速搭建一个响应式网站
        </h1>
        <h2 class="cont homeistings-cont">
          起飞页™是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处
        </h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import './lr.less'
export default {
  name: 'lr',
  data () {
    return {
      ofsetHtClass: 'animated bounceInLeft'
    }
  },
  mounted () {
    // console.log(this.$refs.homelistlr.offsetHeight)
  }
}
</script>

<style scoped>

</style>
