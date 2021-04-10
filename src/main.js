import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import SmartTable from 'vuejs-smart-table'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbaQ2Ya7eBkf9xdrM99HcttmICGsxwtgs'
  }});

  Vue.use(SmartTable)
  
Vue.config.productionTip = false
Vue.use(VueRouter)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')

import firebase from 'firebase'
myRouter.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next();
      } else {
          next({
              path: '/denyaccess',
          });
      }
  } else {
      next();
  }
});