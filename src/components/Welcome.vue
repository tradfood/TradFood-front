<template>
  <section id="homepage">
<!--     <ul v-for="city in cities">
  <li>
    <router-link :to="{name: 'city', params: {city: city.url} }">
      {{ city.name | capitalize }}
    </router-link>
  </li>
</ul> -->
    <div id="hola">
      <div class="main-image"></div>
      <div>
        <h1>Bienvenue sur TradFood !</h1>
        <div>
          <p>
            Trad’ Food est une plateforme en ligne ouverte à tous.
            Elle vous permet, que vous soyez locaux ou touristes, de découvrir ou de redécouvrir, les recettes les plus emblématiques du terroir bordelais.
          </p>
          <p>
            Avec un panel de recettes triées par difficultés, saisons, et types de plats, le site vous propose de réaliser par vous même les recettes bordelaises qui font la richesse gastronomique de la région bordelaise.
          </p>
        </div>
      </div>
    </div>
    <div id="search">
      <h2>Rechercher une recette</h2>

    </div>
    <div class="trends">
      <h2>Tendences</h2>
      <p>A popular method of cooking chicken in recent years<br> both in Barbeque contest as well as backyard barbeques</p>
      <div class="recipes">
        <div class="recipe">
          <img src="" alt="">
          <div class="description">
            <h3>Titre recette</h3>
            <p>Phrase d’introdution à la recette qui la tease et qui dit qu’elle est bien</p>
            <a href="#">En savoir +</a>
          </div>
        </div>
      </div>
    </div>
    <div id="display">
      <h2>Recettes à l'affiche</h2>
      <div class="recipes">
        <div class="recipe">
          <img src="" alt="">
          <div class="description">
            <h3>Titre recette</h3>
            <p>Phrase d’introdution à la recette qui la tease et qui dit qu’elle est bien</p>
            <a href="#">En savoir +</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  filters: require('../mixins/Filters'),
  data: function () {
    return {
      cities: []
    }
  },
  mounted: function () {
    const url = 'https://tradfood.fr/villes.json'
    this.$http.get(url).then(response => {
      this.cities = response.body
    }, response => {
      console.log(response)
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import "../styles/application/homepage"
</style>
