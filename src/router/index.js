import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PageNotFound from "../views/PageNotFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  { 
    path: "*",  //If user enter any incorrect URL, show page not found.
    name: 'pageNotFound',
    component: PageNotFound 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const authToken =  localStorage.getItem('token');
  if (to.meta.requiresAuth && !authToken) {
    next({ name: 'login' });
  }
  else if(to.name == 'login' && authToken){
    next({ name: 'home' })
  }else{
    next();
  }
})


export default router
