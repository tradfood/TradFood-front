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
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../../styles/application/partials/header"
</style>
