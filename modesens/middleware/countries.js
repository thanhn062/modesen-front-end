import Vue from 'vue'
import {localStorage} from '~/static/utils/localStorage.js'

export default function ({ $axios, $route }) {
  // let getCountries = async function() {
  //   let { COUNTRIES } = await $axios.post('/config/', { secretkey: process.env.secretKey });
  //   // Vue.prototype.COUNTRIES = COUNTRIES;
  //   // console.log(1111)
  // };
  // let data = getCountries();
  console.log($route)
}