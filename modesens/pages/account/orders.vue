<template>
  <section>
    <h1 class="hiddenh1">{{ $t('accountLoyalty.my_loyalty') }}</h1>
    <UserInfo/>
  </section>
</template>
<script>
import UserInfo from '~/components/loyalty/UserInfo.vue'

export default {
  components: {
    UserInfo
  }
}
</script>
<style lang="less" scoped>
</style>
