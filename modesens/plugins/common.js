import Vue from 'vue'
var comsys = {
    install(Vue) {
        Vue.prototype.comsys = {
            val:function(val){
                return val
            },
            static_image: 'https://mds0.com'
        };
        
    },
}

Vue.use(comsys)
