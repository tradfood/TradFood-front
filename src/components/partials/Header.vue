<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'city', params: {city: 'bordeaux'} }">Villes</router-link>
        </li>
        <li>
          <router-link :to="{name: 'city', params: {city: 'bordeaux'} }">Recettes</router-link>
        </li>
        <li id="logo">
          <router-link :to="{name: 'home'}">
            <img src="/static/images/logo.svg" alt="">
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">A propos</router-link>
        </li>
        <li><a href="mailto:contact@tradfood.fr">Contact</a></li>
      </ul>
      <a href="#" id="menu-toggle" @click.prevent="menuToggle"></a>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menu: null
    }
  },
  mounted () {
    this.menu = document.getElementById('menu-toggle')
  },
  methods: {
    menuToggle () {
      let nav = document.getElementsByTagName('nav')[0]
      this.menu.classList.toggle('cross')
      nav.classList.toggle('visible')
      document.body.classList.toggle('overflow')
    }
  },
  watch: {
    $route (to, from) {
      if (this.menu.classList.contains('cross')) {
        this.menuToggle()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../../styles/application/partials/header"
</style>
