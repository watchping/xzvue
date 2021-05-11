import Vue from 'vue'
import App from './App.vue'

import router from "@/router/index.js"   //@=src的绝对路径

//引入axios模块  异步调用
import axios from "axios" //node_modules中安装的模块，引入时都不用加路径
//axios.defaults.baseURL="http://localhost:5050"
axios.defaults.baseURL="http://115.159.160.93:8080";
Vue.prototype.axios=axios;  //将axios对象放入Vue的原型对象中   js面向对象  继承 封装 多态

Vue.config.productionTip = false
//引入全局组件 并注册
import MyHeader from "@/components/MyHeader.vue"
Vue.component("my-header",MyHeader);//


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
