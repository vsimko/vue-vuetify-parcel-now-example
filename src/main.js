import Vue from "vue"
import App from "./components/App"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css" // Ensure you are using css-loader

Vue.use(Vuetify)

new Vue({
  el: "#app",
  vuetify: new Vuetify({
    icons: {
      iconfont: "mdi"
    }
  }),
  render: h => h(App)
})
