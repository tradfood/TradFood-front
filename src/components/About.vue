<template>
  <section id="about">
    <h1>Qui sommes-nous ?</h1>
    <div class="description">
      <p v-for="p in $t('about.description')" v-html="p"></p>
    </div>
    <div class="team">
      <a :href="person.link" v-for="person in team" target="_blank">
        <img :src="'static/images/about/team/' + person.slug + '.jpg'" alt="" v-if="person.slug">
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
        {name: 'Joshua', slug: 'joshua', link: 'https://joshuarichard.fr/'},
        {name: 'Bastien', slug: 'bastien', link: 'https://bastienrobert.fr'},
        {name: 'Roxane', slug: 'roxane', link: 'https://roxanezebina.com'},
        {name: 'Clément', slug: 'clement', link: 'https://www.linkedin.com/in/cl%C3%A9ment-renaud-b4a5ba162/'},
        {name: 'Lilou', slug: 'lilou', link: 'https://drive.google.com/file/d/16iYHuIFXYsAmBy1C65yBOqkRyln--BLd/view'},
        {name: 'Milène', slug: 'milene', link: 'http://milene-jahanpour.fr/'},
        {name: 'Nino', slug: 'nino', link: 'https://nino.treyssatvincent.fr/'},
        {name: ''} // Simplest technic to align flexbox
      ]
    }
  },
  mounted () {
    let parallax = new Parallax()
    parallax.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../styles/application/about"
</style>
