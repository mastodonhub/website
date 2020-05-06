function setRem () {
// 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  let htmlDom = document.getElementsByTagName('html')[0]
  // console.log(htmlWidth)
  htmlDom.style.fontSize = htmlWidth / 100 + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
