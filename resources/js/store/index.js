import Vue from 'vue';
import Vuex from 'vuex';
import Sample from './modules/sample';
import Navbar from './modules/navbar';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        Sample,
        Navbar,
    }

});