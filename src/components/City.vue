<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <p>{{ city.description }}</p>
    <router-link to="/">{{ $t('buttons.home') }}</router-link>
    <br><br>

    <label for="mealType">Type :</label>
    <select v-model="filtersData.mealType" id="mealType" @change="sort()">
      <option v-for="option in filtersOptions.mealType" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <br>
    <label for="difficulty">Difficulté :</label>
    <select v-model="filtersData.difficulty" id="difficulty" @change="sort()">
      <option v-for="option in filtersOptions.difficulty" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>

    <br><br>

    <ul v-for="recipe in city.recipes">
      <li>
        <router-link :to="{name: 'recipe', params: {city: city.url, recipe: recipe.url} }">
          {{ recipe.name }} |
          {{ recipe.difficulty }} |
          {{ recipe.meal_type }}
        </router-link>
      </li>
    </ul>
    <br><br>
  </div>
</template>

<script>
export default {
  filters: require('../mixins/Filters'),
  data: function () {
    return {
      city: [],
      filtersData: {
        mealType: 'all',
        difficulty: 'all'
      },
      filtersOptions: {
        mealType: [
          { text: 'Tout', value: 'all' },
          { text: 'Entrée', value: 'starter' },
          { text: 'Plat', value: 'main course' },
          { text: 'Dessert', value: 'dessert' }
        ],
        difficulty: [
          { text: 'Tout', value: 'all' },
          { text: 'Facile', value: '1' },
          { text: 'Moyen', value: '2' },
          { text: 'Difficile', value: '3' }
        ]
      }
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
  methods: {
    sort: function () {
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

      console.log(filteredRecipes)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../styles/application/city"
</style>
