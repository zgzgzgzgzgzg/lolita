import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFund from '../views/404.vue';
import Index from "../views/Index";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      component:Home,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFund
    }
  ]
});

export default router
