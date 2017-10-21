import Vue from 'vue'
import VueResource from 'vue-resource'
import Bourgeon from 'bourgeon'
import App from './App'

Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
