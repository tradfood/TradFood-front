<template>
  <section id="homepage">
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
      <form id="sort">
        <div class="radio-group">
          <h3>{{ $t('city.difficulty') }}</h3>
          <span v-for="option in filtersOptions.mealType">
            <input type="radio" name="mealType" :value="option.value" :id="'difficulty-'+option.value" v-model='filtersData.mealType'>
            <label :for="'difficulty-'+option.value">{{ option.text }}</label>
          </span>
        </div>
        <div class="radio-group">
          <h3>{{ $t('city.mealType') }}</h3>
          <span v-for="option in filtersOptions.difficulty">
            <input type="radio" name="difficulty" :value="option.value" :id="'mealType-'+option.value" v-model='filtersData.difficulty'>
            <label :for="'mealType-'+option.value">{{ option.text }}</label>
          </span>
        </div>
        <input type="submit" value="Envoyer" @click.prevent="redirect">
      </form>
    </div>
    <div id="trends">
      <h2>Tendences</h2>
      <p>A popular method of cooking chicken in recent years<br> both in Barbeque contest as well as backyard barbeques</p>
      <div class="recipes">
        <div class="recipe" v-for="recipe in highlight">
          <img :src="$options.filters.formatUrl(recipe.image.url)" :alt="recipe.name">
          <div class="description">
            <h3>{{ recipe.name.split(' ')[0] }}</h3>
            <p>{{ recipe.description | recipeDescription }}</p>
            <router-link :to="{name: 'recipe', params: {city: city.url, recipe: recipe.url} }" class="button">
              en savoir +
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="display">
      <h2>Recettes à l'affiche</h2>
      <div class="recipes">
        <div class="recipe" v-for="recipe in recipes">
          <div class="image-container">
            <img :src="$options.filters.formatUrl(recipe.image.url)" :alt="recipe.name">
          </div>
          <div class="description">
            <h3>{{ recipe.name.split(' ')[0] }}</h3>
            <p>{{ recipe.description | recipeDescription }}</p>
            <router-link :to="{name: 'recipe', params: {city: city.url, recipe: recipe.url} }" class="button">
              en savoir +
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="bread" data-parallax="2"></div>
    <div id="plate"></div>
  </section>
</template>

<script>
import Parallax from '../mixins/Parallax'
export default {
  filters: require('../mixins/Filters'),
  data () {
    return {
      city: [],
      highlight: [],
      recipes: [],
      trends: null,
      filtersData: {
        mealType: 'all',
        difficulty: 'all'
      },
      filtersOptions: require('../mixins/RecipesFilters.json')
    }
  },
  mounted () {
    const url = 'https://tradfood.fr/bordeaux.json'
    this.$http.get(url).then(response => {
      this.city = response.body
      this.city.recipes.map((k, v) => {
        k.highlight ? this.highlight.push(k) : null
      })
      this.highlight = this.shuffle(this.highlight, 2)
      this.recipes = this.shuffle(this.city.recipes, 6)
    }, response => {
      console.log(response)
    })
    let parallax = Parallax
    parallax.init()
  },
  methods: {
    shuffle (arr, x) {
      const shuffled = arr.sort(() => 0.5 - Math.random())
      return shuffled.slice(0, x)
    },
    redirect () {
      this.$router.push({
        name: 'city',
        params: {
          city: this.city.url,
          mealType: this.filtersData.mealType,
          difficulty: this.filtersData.difficulty
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  @import "../styles/application/homepage"
</style>
