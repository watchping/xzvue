import Vue from 'vue'
import App from './App.vue'
import router from "@/router"   //@=src的绝对路径

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
