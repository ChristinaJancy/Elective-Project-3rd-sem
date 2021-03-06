import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Products from '../views/Products.vue'
import Product from '../components/customer/Product.vue'
import Basket from '../views/Basket.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'
import Login from '../components/admin/Login.vue'
import Account from '../views/Account.vue'
import Favourite from '../views/Favourite.vue'
import RandomOutfit from "../views/RandomOutfit.vue";
import { auth } from '../firebase.js'
// import { auth } from '../../firebase.js'
import 'firebase/firestore'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addnew',
    name: 'AddNew',
    component: AddNewItems,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      requiresAuth: true
    }
  },
  {
  path: '/favourites',
  name: 'Favourite',
  component: Favourite,
    meta: {requiresAuth: true}
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/randomoutfit',
    name: 'RandomOutfit',
    component: RandomOutfit
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('login')
  } else {
    next()
  }
})

export default router