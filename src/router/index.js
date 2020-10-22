import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Products from '../views/Products.vue'
import Product from "../components/customer/Product.vue";
import Basket from '../views/Basket.vue'
import Favorites from "../views/Favorites.vue";
import AddNewItems from '../components/admin/AddNewItems.vue'
import RandomOutfit from '../views/RandomOutfit.vue';
import AccountPage from '../views/AccountPage.vue';
import Login from '../components/admin/Login.vue'
import { auth } from '../firebase.js'
// import { auth } from '../../firebase.js'
import 'firebase/firestore'


Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/addnew",
      name: "AddNew",
      component: AddNewItems,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/basket",
      name: "Basket",
      component: Basket,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/randomOutfit",
      name: "RandomOutfit",
      component: RandomOutfit,
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: Favorites,
    },
    {
      path: "/AccountPage",
      name: "AccountPage",
      component: AccountPage,
    },
  ];

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