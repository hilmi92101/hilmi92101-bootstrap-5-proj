import Vue from 'vue';  
import VueRouter from 'vue-router';  
import routes from './routes'; 
import store from './store'; 

require('./bootstrap'); 

Vue.config.ignoredElements = ['ion-icon'];
Vue.use(VueRouter);   
let app = new Vue({  
    el: '#app',  
    router: new VueRouter(routes),
    store

});

