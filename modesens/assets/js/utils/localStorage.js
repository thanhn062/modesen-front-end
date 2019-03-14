export default {
  set: function(key, val, exp) {  //exp代表小时
    localStorage.setItem(key, val)
    localStorage.setItem(`${key}_expires_`, Date.now() + 1000*60*60*exp)
  },
  get: function(key) {
    let exp = localStorage.getItem(`${key}_expires_`)
    //1小时过期
    if (Date.now() > exp) {  //毫秒*秒*分*时
      this.remove(key)
      return null
    }
    return localStorage.getItem(key)
  },
  remove: function(key) {
    localStorage.removeItem(key)
    localStorage.removeItem(`${key}_expires_`)
  }
}