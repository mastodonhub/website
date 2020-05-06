<template>
  <div class="tpbp tpbp-q1 hidden-xs-only" id="tpbp-q1">
    <div class="tpbp-lb1 q1swiper-container" id="tpbp-lb1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <el-row :gutter="10">
            <el-col :span="4">
              <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyL2FjM2FiOTA4OWJiZmNkNWJhNGZkOTU0YWYxOTFjNDkwLTkweDkwLTgwLndlYnA_p_p100_p_3D.webp" alt="">
            </el-col>
            <el-col :span="20">
              <div class="text">
                <div class="div">
                  选用起飞页一是因为他们就在我们隔壁，二是他们的价格确实很吸引人。在试用了3个月后，我们果断的购买了5年的套餐。起飞页不仅提供了一个美观大方的网站，也提供了稳定的后期服务。我们不断的在为客户介绍起飞页。
                </div>
                <h2 class="h2">
                  苏州金蝶软件
                </h2>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="swiper-slide">
          <el-row :gutter="10">
            <el-col :span="4">
              <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyLzUyYTAxMWFiMWQ3ODNmNTYxMjY4ZTY5NDA3YjM5MGI5LTkweDkwLTgwLndlYnA_p_p100_p_3D.webp" alt="">
            </el-col>
            <el-col :span="20">
              <div class="text">
                <div class="div">
                  我们尝试使用起飞页系统做了大概20个网站。目前为止，起飞页是我们使用过的功能较为完善的一个响应式自助建站系统，基本上可以满足我的企业客户的不同建站需求。有的时候，周末发给客服的问题，也能得到即时的回答，对我们这种帮助客户做网站的公司来说，后期服务是非常重要的。
                </div>
                <h2 class="h2">
                  U-Share – 台湾知名建站公司
                </h2>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="swiper-slide">
          <el-row :gutter="10">
            <el-col :span="4">
              <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyLzhmNGZiYjU0OTExYzc5NDg5MGM0YzVkMDNmZjU2NWQ3LTkweDkwLTgwLndlYnA_p_p100_p_3D.webp" alt="">
            </el-col>
            <el-col :span="20">
              <div class="text">
                <div class="div">
                  如果和WIX, Weebly或者Squarespace进行比较，我觉得起飞页更像是一个综合体。它和Squarespace一样能做出很多华丽的效果，又像weebly一样能很快的搭建博客，又和wix一样容易上手，而且还是响应式的。总之，起飞页是一个很适合我的平台。
                </div>
                <h2 class="h2">
                  北欧维森商旅
                </h2>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>
</template>

<script>
import './q1.less'
export default {
  name: 'q1',
  mounted () {
    /* eslint-disable no-new */new this.$swiper('.q1swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="less">
  .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
</style>
