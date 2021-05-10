import Vue from 'vue'
import App from './App.vue'
import router from "@/router"   //@=src的绝对路径

Vue.config.productionTip = false
//引入全局组件 并注册
import MyHeader from "@/components/MyHeader.vue"
Vue.component("my-header",MyHeader);//


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
