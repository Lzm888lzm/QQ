import Vue from 'vue'
import VueRouter from 'vue-router'
import Second from '../views/Second.vue'
import Mestr from '../views/Mestr.vue'
import Xinde from '../views/Xinde.vue'
import Classify from '../views/Classify.vue'
import Radio from '../views/Radio.vue'
import Shuzu from '../views/Shuzu.vue'
import Piaju from '../views/Piaju.vue'
import Index from '../views/Index.vue'
import Mvmio from '../views/Mvmio.vue'
import Duno from '../views/Duno.vue'
import Wode from '../views/Wode.vue'
import Lianxi from '../views/lianxi'
import hover from '../views/hover'
import wx from '../views/wx'



Vue.use(VueRouter)

const routes = [

  {
    path: '/wx',
    name: 'wx',
    component: wx
  },
  {
    path: '/xinde',
    name: 'Xinde',
    component: Xinde
  },
  {
    path: '/hover',
    name: 'hover',
    component: hover
  },
  {
    path:'/second',
    name:'Second',
    component:Second
  },
  {
    path:'/mestr',
    name:'Mestr',
    component:Mestr
  },
  {
    path:'/Classify',
    name:'Classify',
    component:Classify
  },
  {
    path:'/Radio',
    name:'Radio',
    component:Radio
  },
  {
    path:'/Shuzu',
    name:'Shuzu',
    component:Shuzu
  },
  {
    path:'/Piaju',
    name:'Piaju',
    component:Piaju
  },
  {
    path:'/',
    name:'index',
    component:Index
  },
  {
    path:'/mvmio',
    name:'mvmio',
    component:Mvmio
  },
  {
    path:'/duno',
    name:'duno',
    component:Duno
  },
  {
    path:'/wode',
    name:'wode',
    component:Wode
  },
  {
    path: '/lianxi',
    name: 'lianxi',
    component: Lianxi
  },


]

const router = new VueRouter({
  routes
})

export default router
