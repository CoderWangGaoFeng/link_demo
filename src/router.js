import Vue from 'vue'
import Router from 'vue-router'
import idpos from './views/idpos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/',
      name: 'idpos',
      // component: () => import(/* webpackChunkName: "about" */ './views/idpos.vue')
      component:idpos
    }
  ]
})
