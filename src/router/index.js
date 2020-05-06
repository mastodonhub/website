import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
Vue.use(Router)
const router = new Router({
  // mode: 'history', // 是否去掉#号
  routes: routers
})
router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
