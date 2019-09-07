import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import admin from '@/views/directeur'
import organigrame from '@/components/organigrame'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home
    },

  
    {
      path: '/dashboard',
      name: 'admin',
      component: admin, organigrame
    }
  ]
})



export default router
