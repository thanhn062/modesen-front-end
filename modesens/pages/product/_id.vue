<template>
  <section class="">
    <Header/>
    <main>
      <nuxt-link to="/about">To About</nuxt-link><br>
      {{ $route.params.id }}
      <div>
        <div>
          <img 
            :src="product.cover" 
            alt="">
          pid = {{ product.pid }} &nbsp;&nbsp;
          category = {{ product.category }} &nbsp;&nbsp;
          price = {{ product.saleprice }} &nbsp;&nbsp;
          gender = {{ product.gender }}
          <span>{{ product.description }}</span><br>
          <span>{{ product.designer }}</span><br>
        </div>
        <h3>images信息</h3>
        <ul>
          <li 
            v-for="(img,index) in product.images" 
            :key="index">
            <img 
              :src="img.link" 
              :alt="product.title" 
              merchant="img.availability__merchant">
          </li>
        </ul>
        <h3>availabilities信息</h3>
        <ul>
          <li 
            v-for="(avail,index) in availabilities" 
            :key="index">
            <img 
              :src="avail.cover" 
              alt="">
            <span>designer: {{ avail.designer }}</span>&nbsp;&nbsp;
            <span>merchant: {{ avail.merchant }}</span>&nbsp;&nbsp;
            <span>sizes: {{ avail.sizes }}</span>&nbsp;&nbsp;
            <span>price: {{ avail.saleprice }}</span>&nbsp;&nbsp;
          </li>
        </ul>
        <h3>getsub信息：keys</h3>
        <ul>
          <li 
            v-for="(keyStr,index) in keysStr" 
            :key="index">
            <span>{{ index }}: {{ keyStr }}</span>
          </li>
        </ul>
        <h3>getmd信息：merchans</h3>
        <ul>
          <li 
            v-for="(merchant,index) in merchants" 
            :key="index">
            <span>{{ merchant }}</span>
          </li>
        </ul>
        <h3>getsimilar信息：similar</h3>
        <ul>
          <li 
            v-for="(similar,index) in similars" 
            :key="index">
            <span>{{ similar.country }}</span><img 
              :src="similar.cover" 
              alt="">
          </li>
        </ul>
      </div>
    </main>
    <Footer/>
  </section>
</template>
<script>
import axios from '~/plugins/axios'
import api from '~/static/js/api.js'

export default {
  components: {},
  data() {
    return {
      keysStr: [],
      merchants: [],
      similars: [],
      recent: []
    }
  },
  head: {},
  async asyncData({ route, store }) {
    let {
      data: { availabilities, product }
    } = await axios.get(
      `/product/${route.params.id}/getinfo/?secretkey=${store.state.secretKey}`
    )
    return { availabilities, product }
  },
  created() {
    this.getSub()
    this.getMd()
    this.getMore()
    this.getRecentMore()
  },
  methods: {
    async getSub() {
      var params = {}
      params.gender = 'f' //window.modeSens.Gender.get();
      params.category = 'c'
      let { keys } = await api.getSub(params)
      this.keysStr = keys
    },
    async getMd() {
      var params = {}
      params.gender = 'f'
      params.category = 'c'
      params.subcategories = ''
      let { merchants } = await api.getmd(params)
      this.merchants = merchants
    },
    async getMore() {
      let data = new Object()
      data.amount = 10
      data.offset = 0
      data.designers = 'HELMUT LANG'
      data.merchants = ''
      data.onsale = false
      data.sizes = 'IT'
      data.timestamp = new Date().getTime() + ''
      data.pid = this.$route.params.id
      console.log(data.timestamp)
      let { similars } = await api.getmore(data)
      this.similars = similars
    },
    async getRecentMore() {
      let data = new Object()
      data.offset = 0
      data.amount = ''
      data.timestamp = new Date().getTime() + ''
      data.pid = this.$route.params.id
      let { recent } = await api.getrecentmore(data)
      this.recent = recent
    }
  }
}
</script>
<style>
</style>
