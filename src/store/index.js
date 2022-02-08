import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user
  },
  plugins: [vuexLocal.plugin]
});
