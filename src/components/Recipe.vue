<template>
  <div class="hello">
    <h1>{{ recipe.name }}</h1>
    <h2>Description</h2>
    <p>{{ recipe.description }}</p>
    <h2>Ingrédients</h2>
    <p>{{ recipe.ingredients | compiledMarkdown }}</p>
    <h2>Recette</h2>
    <p>{{ recipe.recipe | compiledMarkdown }}</p>
    <p>
      <router-link to="/">{{ $t('buttons.home') }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  filters: require('../mixins/Filters'),
  data: function () {
    return {
      recipe: []
    }
  },
  mounted: function () {
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
<style lang="stylus" scoped>
h1
  color green
</style>
