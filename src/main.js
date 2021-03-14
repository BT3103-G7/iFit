import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
=======
import VueRouter from 'vue-router'
import Routes from './routes.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
>>>>>>> 188743d... Add src files and .gitignore file
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
<<<<<<< HEAD
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
=======

Vue.config.productionTip = false
Vue.use(VueRouter)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
>>>>>>> 188743d... Add src files and .gitignore file
}).$mount('#app')
