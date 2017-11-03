<template>
  <div>
    <p>
      {{ $t('messages.welcome') }}
    </p>
    <ul v-for="city in cities">
      <li>
        <router-link :to="{name: 'city', params: {city: city.url} }">
          {{ city.name | capitalize }}
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

<style>
</style>
