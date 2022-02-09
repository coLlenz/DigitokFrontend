import Vuex from 'vuex';
import Vue from 'vue';
import auth from './module/auth'


//Load Vuex
Vue.use(Vuex);

//Create store
const store = new Vuex.Store({
    modules: {
        auth
    }
})


export default store;


