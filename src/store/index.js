import Vuex from 'vuex';
import Vue from 'vue';
import auth from './module/auth'


//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        auth,
    }
})