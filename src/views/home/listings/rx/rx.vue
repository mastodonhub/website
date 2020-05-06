<template>
  <div class="rx">
    <el-row :gutter="10">
      <el-col :sm="6">
        <h1 class="tit">
          客户服务热线：
          <br>
          4006-285-729
        </h1>
      </el-col>
      <el-col :sm="9" class="rx-t2">
        <h1 class="tit">
          工作时间：09:00~19:00（节假日定时响应）
        </h1>
        <div class="text">
          为每个用户提供优质的客户服务 让每个人都能自己做出赏心悦目的网站
        </div>
      </el-col>
      <el-col id="rximg" :sm="9" style="text-align: right">
        <img src="https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cHM6Ly93d3cucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyL2IyYzAxOWU2MjMwMjkyMWUyZWI1MDg2MDQ4ZWM0ZjI3LTE4MHg2Ni04MC53ZWJw.webp" alt="">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import './rx.less'
export default {
  name: 'rx'
}
</script>

<style scoped>

</style>
