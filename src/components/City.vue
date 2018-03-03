<template>
  <div>
    <section id="sort">
      <div class="radio-group">
        <h2>{{ $t('city.difficulty') }}</h2>
        <span v-for="option in filtersOptions.mealType">
          <input type="radio" name="mealType" :value="option.value" :id="'difficulty-'+option.value" v-model='filtersData.mealType' @change='sort'>
          <label :for="'difficulty-'+option.value">{{ option.text }}</label>
        </span>
      </div>
      <div class="radio-group">
        <h2>{{ $t('city.mealType') }}</h2>
        <span v-for="option in filtersOptions.difficulty">
          <input type="radio" name="difficulty" :value="option.value" :id="'mealType-'+option.value" v-model='filtersData.difficulty' @change='sort'>
          <label :for="'mealType-'+option.value">{{ option.text }}</label>
        </span>
      </div>
    </section>

    <ul id="recipes">
      <li v-for="recipe in recipes">
        <router-link :to="{name: 'recipe', params: {city: city.url, recipe: recipe.url} }">
          <div class="img-wrap">
            <img :src="$options.filters.formatUrl(recipe.image.url)" :alt="recipe.name">
          </div>
          <span class="title">{{ recipe.name }}</span>
          <span class="description">{{ recipe.description | recipeDescription }}</span>
        </router-link>
      </li>
      <p v-if="recipes.length <= 0" class="no-recipe">
        Aucun recette ne correspond à la selection
      </p>
    </ul>

    <div id="pie" data-parallax="2"></div>

  </div>
</template>

<script>
import Parallax from '../mixins/Parallax'
export default {
  filters: require('../mixins/Filters'),
  data () {
    return {
      city: [],
      recipes: '',
      filtersData: {
        mealType: this.$route.params.mealType || 'all',
        difficulty: this.$route.params.difficulty || 'all'
      },
      filtersOptions: require('../mixins/RecipesFilters.json')
    }
  },
  mounted () {
    const url = 'https://tradfood.fr/' + this.$route.params.city + '.json'
    this.$http.get(url).then(response => {
      this.city = response.body
      this.recipes = response.body.recipes
      this.sort()
      this.title()
    }, response => {
      this.$router.push('/')
    })
    let parallax = Parallax
    parallax.init()
  },
  methods: {
    sort () {
      var filteredRecipes = []
      var selectedDifficulty = this.filtersData.difficulty
      var selectedMealType = this.filtersData.mealType

      for (let i = 0; i < this.city.recipes.length; i++) {
        if (
          (this.city.recipes[i].difficulty === parseInt(selectedDifficulty) ||
          selectedDifficulty === 'all') &&
          (this.city.recipes[i].meal_type === selectedMealType ||
          selectedMealType === 'all')
        ) {
          filteredRecipes.push(this.city.recipes[i])
        }
      }
      this.recipes = filteredRecipes
    },
    uncheck () {
      console.log(this)
    },
    title () {
      document.title = this.city.name + ' | TradFood'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../styles/application/city"
</style>
