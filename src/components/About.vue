<template>
  <section id="about">
    <h1>Qui sommes-nous ?</h1>
    <div class="description">
      <p>Trad’ Food est une plateforme en ligne ouverte à tous. <br>
        Elle permet à chacun, qu’il soit local ou touriste, de découvrir ou de redécouvrir, les recettes emblématiques du terroir français, mais aussi les lieux où les déguster. </p>
      <p>Avec une première version axée sur les plats traditionnels de Bordeaux et ses alentours, TradFood a pour but final de proposer à ses utilisateurs un contenu plus large recensant les richesses gastronomiques des différentes régions françaises. </p>
      <p>Grâce à la liste de restaurants présents sur Trad’ Food, chacun pourra aisément déguster chacuns des plats traditionnels proposés, mais aussi les préparer grâce au large panel de recettes et de conseils accessibles sur le site.</p>
      <p>Ce projet a été créé par une équipe de 6 étudiants en MMI à l’IUT Bordeaux Montaigne, dans le cadre d’un projet d’intégration web sur l’année scolaire 2016-2017. Ce dernier est basé sur le thème “manger sur Bordeaux”. </p>
    </div>
    <div class="team">
      <a href="#" v-for="person in team">
        <img :src="'static/images/about/team/' + person.slug + '.jpg'" alt="">
      </a>
    </div>
    <div id="plate"></div>
  </section>
</template>

<script>
import Parallax from '../mixins/Parallax'
export default {
  data () {
    return {
      team: [
        {name: 'Joshua', slug: 'joshua'},
        {name: 'Bastien', slug: 'bastien'},
        {name: 'Roxane', slug: 'roxane'},
        {name: 'Clément', slug: 'clement'}
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
