<template>
  <div>
    <div class="container">
      <div id="recipe" itemscope itemtype="http://schema.org/Recipe">
        <link itemprop="url" :href="'https://tradfood.fr' + this.$route.fullPath" />
        <meta itemprop="mainEntityOfPage" content="True" />
        <div class="recipe-image">
          <img :src="$options.filters.formatUrl(recipe.image.url)" :alt="recipe.name" itemprop="image">
        </div>
        <div class="recipe-details">
          <div class="recipe-title" itemprop="name">
            <h1>{{ recipe.name }}</h1>
          </div>
          <div class="recipe-description">
            <p>{{ recipe.description }}</p>
          </div>
          <div class="recipe-content">
            <div class="recipe-details__informations">
              <h2>Informations</h2>
              <ul>
                <li itemprop="recipeYield">Nombre de pièces: {{ recipe.servings }}</li>
                <li>
                  <time itemprop="prepTime" :datetime="'PT' + recipe.preparation_time + 'M'">
                    Temps de préparation: {{ recipe.preparation_time }}
                  </time>
                </li>
                <li>
                  <time itemprop="cookTime" :datetime="'PT' + recipe.cooking_time + 'M'">
                    Temps de cuisson: {{ recipe.cooking_time }}
                  </time>
                </li>
                <li>Type de plat: {{ $t(`recipe.filters.mealType.${recipe.meal_type.replace(/\s+/g, '-')}`) }}</li>
                <li>Difficulté: {{ $t(`recipe.filters.difficulty.${recipe.difficulty}`) }}</li>
                <li>Saison: {{ $t(`recipe.filters.season.${recipe.season}`) }}</li>
              </ul>
            </div>
            <div class="recipe-details__ingredients">
              <h2>Ingredients</h2>
              <div v-html="$options.filters.compiledMarkdown(recipe.ingredients)" class="content" itemprop="ingredients"></div>
            </div>
            <div class="recipe-details__recipe">
              <h2>Recette</h2>
              <div v-html="$options.filters.compiledMarkdown(recipe.recipe)" class="content" itemprop="recipeInstructions"></div>
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
      this.meta()
    }, response => {
      console.log(response)
    })
  },
  methods: {
    meta () {
      document.title = this.recipe.name + ' | TradFood'
      document.querySelector('meta[name="description"]').setAttribute('content', this.$options.filters.recipeDescription(this.recipe.description) + ' A découvrir sur TradFood !')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../styles/application/recipe"
</style>
