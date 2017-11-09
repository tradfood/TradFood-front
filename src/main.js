// Basic requirements
import Vue from 'vue'
import VueResource from 'vue-resource'
import Bourgeon from 'bourgeon'
import App from './App'

// Ooooh, i18n has been init
Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})

// Wow, HTTP client for Vue
Vue.use(VueResource)

// Here i'm importing partials
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'

// Here i'm adding partials components
Vue.component('partial-header', Header)
Vue.component('partial-footer', Footer)

// Here i'm rendering the Vue
/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
