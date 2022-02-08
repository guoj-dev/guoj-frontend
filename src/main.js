import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import vuetify from './plugins/vuetify';
import VueApollo from 'vue-apollo';
import apolloProvider from './graphql';
 

Vue.config.productionTip = false
Vue.use(VueApollo);

router.beforeEach((to, from, next) => {
  var isLogin = store.state.user.name;
 
  if (!isLogin) {
    if (to.path !== '/login') {
      //跳转到登录页
      return next({ path: '/login' });
    } else {
      next();
    }
  } else {
    // if (to.path === '/login') {
    //   //跳转到首页
    //   return next({ path: '/index' });
    // }else{
    next();
  }
});
 

new Vue({
  store,
  provide: apolloProvider.provide(),
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
