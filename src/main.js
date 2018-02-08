// Basic requirements
import Vue from 'vue'
import VueResource from 'vue-resource'
import Bourgeon from 'bourgeon'
import App from './App'
// Here i'm importing partials
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'

// Ooooh, i18n has been init
Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})

// Wow, HTTP client for Vue
Vue.use(VueResource)

// Header and footer
new Vue({
  render: h => h(Header)
}).$mount('header')

new Vue({
  render: h => h(Footer)
}).$mount('footer')

// Here i'm rendering the Vue
/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
