<template>
  <div>
    <div class="container">
      <div id="recipe">
        <div class="recipe-image">
          <img :src="$options.filters.formatUrl(recipe.image.url)" :alt="recipe.name">
        </div>
        <div class="recipe-details">
          <div class="recipe-title">
            <h1>{{ recipe.name }}</h1>
          </div>
          <div class="recipe-content">
            <div class="recipe-details__informations">
              <h2>Informations</h2>
              <ul>
                <li>Nombre de pièces: {{ recipe.servings }}</li>
                <li>Temps de préparation: {{ recipe.preparation_time }}</li>
                <li>Temps de cuisson: {{ recipe.cooking_time }}</li>
                <li>Type de plat: {{ $t(`recipe.filters.mealType.${recipe.meal_type.replace(/\s+/g, '-')}`) }}</li>
                <li>Difficulté: {{ $t(`recipe.filters.difficulty.${recipe.difficulty}`) }}</li>
                <li>Saison: {{ $t(`recipe.filters.season.${recipe.season}`) }}</li>
              </ul>
            </div>
            <div class="recipe-details__ingredients">
              <h2>Ingredients</h2>
              <div v-html="$options.filters.compiledMarkdown(recipe.ingredients)" class="content"></div>
            </div>
            <div class="recipe-details__recipe">
              <h2>Recette</h2>
              <div v-html="$options.filters.compiledMarkdown(recipe.recipe)" class="content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tomatoes"></div>
  </div>
  <!-- <h1>{{ recipe.name }}</h1>
  <h2>Description</h2>
  <p>{{ recipe.description }}</p>
  <h2>Ingrédients</h2>
  <p v-html="$options.filters.compiledMarkdown(recipe.ingredients)"></p>
  <h2>Recette</h2>
  <p v-html="$options.filters.compiledMarkdown(recipe.recipe)"></p> -->
</template>

<script>
export default {
  filters: require('../mixins/Filters'),
  data () {
    return {
      recipe: []
    }
  },
  mounted () {
    const url = 'https://tradfood.fr/' + this.$route.params.city + '/' + this.$route.params.recipe + '.json'
    this.$http.get(url).then(response => {
      this.recipe = response.body
    }, response => {
      console.log(response)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../styles/application/recipe"
</style>
