"use strict";
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import setDocumentTitle from '@/utils/setDocumentTitle.util'
// import store from '@/store'

Vue.use(VueRouter)
window.scrollTop = 0;
const router = new VueRouter({
  /* mode: 'history', */
  routes: routes
});

export default router;
