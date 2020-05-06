<template>
  <div class="tpbp tpbp-lb1back hidden-xs-only" style="backgroundColor: #f9f9f9;">
    <div class="tpbp-cont">
      <div class="tit">
        免费海量模板随您挑选
      </div>
      <h2 class="tit-sm">
        您可以从众多出色的H5模板中挑选您喜欢的
      </h2>
    </div>
    <div class="tpbp-lb1 swiper-container" id="tpbp-lb1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L2QwYzIxNDg5NWQ4MGI2OTRkNDYyYTdjZmY1YjNhYzFjLTQ4NXgzNDQtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzM0MTdiNTZiMmU4MDQ1N2M4ZTIyMjdlMTIyMDcwYWRkLTQ4NXgzNDQtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp 1x,https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzM0MTdiNTZiMmU4MDQ1N2M4ZTIyMjdlMTIyMDcwYWRkLTk3MHg2ODgtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp 2x" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzkwMTllZmI5YzExNjFjNTBlNzg4NDdkMzEzMzk4MjkxLTQ4NXgzNDQtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzZmY2E2NDU4MTNhMTI2NWNhMWFiY2UxZDI1ODdkNzEzLTQ4NXgzNDQtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L2E4MzczM2IwMjRiNzRjNTFkMTEzNDIwNDdmNTNiYTI5LTQ4NXgzNDQtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3LzM1YTM2ZjkwYmEyMGFjMjcxMTI4NWY3MmI4NmI3ZmQ1LTQ4NXgzNDQtODAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import './lb1.less'
export default {
  name: 'tpbp',
  mounted () {
    /* eslint-disable no-new */new this.$swiper('.swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="less">
  .swiper-container{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: #000;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }
</style>
