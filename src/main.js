import Vue from "vue"
import App from "./App.vue"

process.env.VUE_APP_IS_MOCK === "true" && require("./mock")

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
