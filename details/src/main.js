import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'
// console.log(new VueSocketIO())
Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
  connection: 'ws://121.196.60.233:9090', //正式
  // connection: 'ws://47.114.136.117:9090', //开发
}))
Vue.use(Vant);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
