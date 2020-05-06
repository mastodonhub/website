<template>
  <div class="zh-main">
    <banner></banner>
    <tpbp></tpbp>
    <lr></lr>
    <rl></rl>
    <lr2></lr2>
    <ts></ts>
    <lb1></lb1>
    <ls1></ls1>
    <x1></x1>
    <hz></hz>
    <kh></kh>
    <q1></q1>
    <rx></rx>
    <yq></yq>
  </div>
</template>

<script>
import './zh-main.less'
import Banner from './banner/banner'
import Tpbp from './listings/tpbp/tpbp'
import Lr from './listings/lr/lr'
import Lr2 from './listings/lr2/lr2'
import Rl from './listings/rl/rl'
import Ts from './listings/ts/tpbp2'
import Lb1 from './listings/lb1/lb1'
import Ls1 from './listings/ls1/ls1'
import X1 from './listings/x1/x1'
import Hz from './listings/hz/hz'
import Kh from './listings/kh/kh'
import Q1 from './listings/q1/q1'
import Rx from './listings/rx/rx'
import Yq from './listings/yq/yq'
export default {
  name: 'home',
  components: {
    'banner': Banner,
    'tpbp': Tpbp,
    'lr': Lr,
    'rl': Rl,
    'lr2': Lr2,
    'ts': Ts,
    'lb1': Lb1,
    'ls1': Ls1,
    'x1': X1,
    'hz': Hz,
    'kh': Kh,
    'q1': Q1,
    'rx': Rx,
    'yq': Yq
  }
}
</script>

<style lang="less">
</style>
