<template>
  <section id="about">
    <h1>Qui sommes-nous ?</h1>
    <div class="description">
      <p v-for="p in $t('about.description')" v-html="p"></p>
    </div>
    <div class="team">
      <a :href="person.link" v-for="person in team">
        <img :src="'static/images/about/team/' + person.slug + '.jpg'" alt="">
      </a>
    </div>
    <div id="plate"></div>
  </section>
</template>

<script>
import Parallax from '../mixins/Parallax'
export default {
  filters: require('../mixins/Filters'),
  data () {
    return {
      team: [
        {name: 'Joshua', slug: 'joshua', link: '#'},
        {name: 'Bastien', slug: 'bastien', link: 'https://bastienrobert.fr'},
        {name: 'Roxane', slug: 'roxane', link: '#'},
        {name: 'Clément', slug: 'clement', link: '#'}
      ]
    }
  },
  mounted () {
    let parallax = Parallax
    parallax.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../styles/application/about"
</style>
