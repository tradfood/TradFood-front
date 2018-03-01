/* eslint-disable no-unused-vars */
import VueRouter from 'vue-router'
import routes from 'src/routes'
import meta from 'src/meta.json'

export default {
  router: null,
  install (Vue) {
    const router = new VueRouter({
      routes,
      mode: 'history'
    })

    Vue.mixin({
      beforeCreate () {
        if (this.$root === this) {
          this.$options.router = router
        }
      }
    })

    router.beforeEach((to, from, next) => {
      if (to.meta.title == null || to.meta.title.lenght <= 0) {
        document.title = meta.completeTitle
      } else {
        document.title = to.meta.title + ' | ' + meta.title
      }
      next()
    })

    Vue.use(VueRouter)
  }
}
