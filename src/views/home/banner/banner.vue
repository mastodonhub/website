<template>
  <div class="zh-main-banner">
    <video autoplay="autoplay" muted="muted" volume="0" poster="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL2RkOGZkYWM3MjkwNGUwZWZiY2M0ZTczOGZiYmEzMjlhLTgwLndlYnA_p_p100_p_3D.webp" loop="loop" style="width: 100%; height: 100%;object-fit:cover;object-position:center center" class="section-background-video">
      <source type="video/webm" src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzLzEyMzQud2VibQ_p_p100_p_3D_p_p100_p_3D.webm">
      <source type="video/mp4" src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL2FwcGxlX3NpbmdfY2hpbGQubXA0.mp4">
    </video>
    <el-row class="zh-main-banner-contText" :gutter="10">
      <el-col :xs="24" :sm="12" :offset="12">
        <h1 class="tit">
          做一个响应式网站<br>让世界更好地了解您
          <!--            <span class="typer-cursor"></span>-->
        </h1>
        <h2 class="tit-sm">
          真「响应式」自助建站平台<br>
          艺术品级模板 引领自助建站潮流
          <div class="cont-btn">
            <el-button>免费创建用户</el-button>
          </div>
        </h2>
      </el-col>
    </el-row>
    <font-icon :icon-class="'fa fa-angle-down cont-icon hidden-xs-only'"></font-icon>
    <div class="zh-main-banner-shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style scoped>

</style>
