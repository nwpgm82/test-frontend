import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokemon from '../views/Pokemon.vue'
import Function1 from '../views/Function1.vue'
import Function2 from '../views/Function2.vue'
import Function3 from '../views/Function3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/Pokemon',
    name: 'Pokemon',
    component: Pokemon
  },{
    path: '/Function1',
    name: 'Function1',
    component: Function1
  }, {
    path: '/Function2',
    name: 'Function2',
    component: Function2
  }, {
    path: '/Function3',
    name: 'Function3',
    component: Function3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
