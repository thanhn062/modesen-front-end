<template>
  <section class="container">
    <div>
      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath($i18n.country, locale.code)">{{ locale.name }}</nuxt-link>
      <div><nuxt-link to="/loyalty/">membership-intro</nuxt-link></div>
      <div><nuxt-link to="/account/loyalty/">membership</nuxt-link></div>
    </div>
    <b-form>
      <b-form-group>
        <b-form-radio-group
          v-model="selectedSex"
          name="sexoptions">
          <b-form-radio value="f">{{ $t('Footer.Womens') }}
            <div/>
          </b-form-radio>
          <b-form-radio value="m">{{ $t('Footer.Mens') }}</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    </b-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      selectedSex: 'f'
    }
  },
  computed: {
    mdLoginShow() {
      return this.$store.state.mdLoginShow
    }
  }
}
</script>
<style>
</style>
