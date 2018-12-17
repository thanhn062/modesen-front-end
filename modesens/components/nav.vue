<template>
  <b-nav 
    :class="showdir">
    <b-nav-item 
      v-for="(list, index) in navlist"
      :key="index"
      @click="nav_change(index)">{{ $t('accountLoyalty.account_overview') }}</b-nav-item>
  </b-nav>
</template>
<script>
import $ from 'jquery'
export default {
  props: {
    navlist: {
      type: Array,
      default: function() {
        return [1, 2, 4, 5]
      }
    },
    showdir: {
      type: String,
      default: function() {
        return 'colth'
      }
    }
  },
  methods: {
    nav_change(tabItem) {
      this.$emit('navchange', tabItem)
    }
  }
}
</script>
