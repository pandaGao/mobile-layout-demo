import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ScaleViewport from './views/ScaleViewport.vue'
import NoScaleViewport from './views/NoScaleViewport.vue'
import RemScaleViewport from './views/RemScaleViewport.vue'
import RemNoScaleViewport from './views/RemNoScaleViewport.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/remScaleViewport',
      name: 'remScaleViewport',
      component: RemScaleViewport
    },
    {
      path: '/scaleViewport',
      name: 'scaleViewport',
      component: ScaleViewport
    },
    {
      path: '/remNoScaleViewport',
      name: 'remNoScaleViewport',
      component: RemNoScaleViewport
    },
    {
      path: '/noScaleViewport',
      name: 'noScaleViewport',
      component: NoScaleViewport
    }
  ]
})
