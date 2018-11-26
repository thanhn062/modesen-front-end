<template>
  <b-nav 
    :class="showdir">
    <b-nav-item 
      v-for="(list, index) in navlist"
      :key="index"
      @click="tabchange(view)">{{ list }}</b-nav-item>
  </b-nav>
</template>
<script>
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
    },
    showview: {
      type: Array,
      default: function() {
        return [1, 2, 3, 4]
      }
    }
  },
  methods: {
    tabchange(tabItem) {
      this.currentView = tabItem
    }
  }
}
</script>
