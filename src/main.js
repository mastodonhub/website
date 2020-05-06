// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import I18N from 'vue-i18n'
import '@/resetstyle/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import En from './i18n/en/index'
import Zh from './i18n/zh/index'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import '../src/libs/animate.min.css'
import './libs/rem'
import './views/views-m.less'

// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

import Qs from 'qs'
// 引入全局定义
import Global from '../config/global'
import Bus from '@/libs/bus/bus'
import FontsIcon from './components/fonticons/'
const Mock = require('mockjs')

Vue.use(I18N)
Vue.locale = () => {}
const messages = {
  EN: Object.assign(En, enLocale),
  ZH: Object.assign(Zh, zhLocale)
}
const i18n = new I18N({
  locale: Cookies.get('zI18n'),
  messages,
  silentTranslationWarn: true
})
Vue.use(ElementUI, {
  i18n: function (path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) return value
    return ''
  }
})

// 注册全局
Vue.component('font-icon', FontsIcon)

Vue.config.productionTip = false

// Vue 挂载原型
Vue.prototype.$hs = Global.HOST
Vue.prototype.$i18 = i18n
Vue.prototype.$qs = Qs
Vue.prototype.$mock = Mock
Vue.prototype.$cookies = Cookies
Vue.prototype.$bus = Bus
Vue.prototype.$swiper = Swiper
//  /* eslint-disable no-new */ 这个是防止swiper报错 因为vue不支持原生

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
