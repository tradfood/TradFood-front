<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <p>{{ city.description }}</p>
    <router-link to="/">{{ $t('buttons.home') }}</router-link>
    <ul v-for="recipe in city.recipes">
      <li>
        <router-link :to="{name: 'recipe', params: {city: city.url, recipe: recipe.url} }">
          {{ recipe.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  filters: require('../mixins/Filters'),
  data: function () {
    return {
      city: []
    }
  },
  mounted: function () {
    const url = 'https://tradfood.fr/' + this.$route.params.city + '.json'
    this.$http.get(url).then(response => {
      this.city = response.body
    }, response => {
      this.$router.push('/')
    })
  },
  computed: {
    name () {
      const name = this.$route.params.city
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  color green
</style>
