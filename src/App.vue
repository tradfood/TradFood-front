<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view></router-view>
    <div>
      <button @click="setLang(lang)" v-for="lang in locales" :disabled="isLang(lang)">{{ $t('locales.'+ lang) }}</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import "../node_modules/typus" // base styles
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 50%

#app
  text-align center

.icon-logo
  margin-bottom 2.5rem
</style>
