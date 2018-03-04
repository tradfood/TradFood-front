<template>
  <footer v-show="this.$route.name !== 'recipe'">
    <div>
      <h2>Abonnez-vous !</h2>
      <div id="mc_embed_signup">
        <form action="https://tradfood.us17.list-manage.com/subscribe/post?u=aeeb4785daf341646eb4140fa&amp;id=bf0f9b5385" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
            	<input type="email" value="" placeholder="Email" name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
          	<div id="mce-responses" class="clear">
          		<div class="response" id="mce-error-response" style="display:none"></div>
          		<div class="response" id="mce-success-response" style="display:none"></div>
          	</div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_aeeb4785daf341646eb4140fa_bf0f9b5385" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Envoyer" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
      </div>
    </div>
    <div>
      <h2>Plus</h2>
      <router-link :to="{name: 'about'}">Notre équipe</router-link>
      <a href="https://github.com/tradfood/teams" target="_blank">Qui sommes-nous ?</a>
    </div>
    <div>
      <h2>Contactez-nous</h2>
      <a href="mailto:contact@tradfood.fr">contact@tradfood.fr</a>
      <div class="social">
        <a href="https://twitter.com/tradfood" class="twitter" target="_blank"></a>
        <a href="https://www.instagram.com/tradfoodfr/" class="instagram" target="_blank"></a>
        <a href="https://www.facebook.com/tradfoodfr/" class="facebook" target="_blank"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../../styles/application/partials/footer"
</style>
