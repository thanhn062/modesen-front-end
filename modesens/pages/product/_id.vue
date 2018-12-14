<template>
  <section class="prdCon">
    <nuxt-link to="/about4">To About</nuxt-link><br>
    {{ $route.params.id }}
    <div v-if="product">
      <div>
        <img 
          :src="product.cover" 
          alt="">
        pid = {{ product.pid }} &nbsp;&nbsp;
        category = {{ product.category }} &nbsp;&nbsp;
        price = {{ product.saleprice }} &nbsp;&nbsp;
        gender = {{ product.gender }}
        <span class="description">{{ product.description }}</span><br>
        <span>{{ product.designer }}</span><br>
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
      </div>
      <h3>availabilities信息</h3>
      <ul v-if="availabilities">
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
  </section>
</template>
<script>
import axios from '~/plugins/axios'
import product from '~/static/api/1.0/product.js'
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
  async asyncData({ app, res, route, store }) {
    if (store.state.availabilities && store.state.product) {
      return
    }
    let {
      data: { availabilities, product }
    } = await axios.getasync(
      `/product/${route.params.id}/getinfo/`,
      1,
      1,
      app.$cookies.get('TOKEN') || ''
    )
    store.commit('setInfos', { availabilities, product })
    return { availabilities, product }
  },
  created() {
    // console.log(this.availabilities)
    // this.$ga.page('/product/' + this.$route.params.id)
  },
  mounted() {
    this.getSub()
    this.getMd()
    this.getMore()
  },
  methods: {
    async getSub() {
      this.keysStr = this.$localStorage.get('product-keys')
      console.log(22222, this.keysStr)
      if (!this.keysStr) {
        var params = {}
        params.gender = 'f'
        params.category = 'c'
        let {
          data: { keys }
        } = await product.getSub(params)
        this.$localStorage.set('product-keys', keys, 1)
        this.keysStr = keys
        console.log(1111111111111111)
      }
    },
    async getMd() {
      var params = {}
      params.gender = 'f'
      params.category = 'c'
      params.subcategories = ''
      let {
        data: { merchants }
      } = await product.getmd(params)
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
      data.pid = this.$route.params.id
      let timestemp = new Date().getTime() + ''
      let {
        data: { similars }
      } = await product.getmore(data, timestemp)
      this.similars = similars
    },
    async getRecentMore() {
      let data = new Object()
      data.offset = 0
      data.amount = ''
      data.pid = this.$route.params.id
      let {
        data: { recent }
      } = await product.getrecentmore(data)
      this.recent = recent
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/prd.less';
@fontS: 20px;
.prdCon {
  font-size: @fontS;
}
</style>
