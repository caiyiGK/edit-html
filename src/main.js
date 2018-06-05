"use strict";
import '@/assets/style/common.less';

import Vue from 'vue'
import App from './App.vue'

// import store from '@/store'
import router from './router'

// import * as layout from '@/layout'
// import * as component from '@/components'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  // store,
  components: {App},
  template: '<App />'
})
