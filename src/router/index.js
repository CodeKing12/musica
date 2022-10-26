import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'
import CollectionsView from '../views/CollectionsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      enterClass: "cover-right-enter",
      leaveClass: "cover-right-leave"
    }
  },
  {
    path: '/genres',
    name: 'genres',
    component: ChartView,
    meta: {
      enterClass: "cover-up-enter",
      leaveClass: "cover-up-leave"
    }
  },
  {
    path: '/collections',
    name: 'collections',
    component: CollectionsView,
    meta: {
      enterClass: "cover-down-enter",
      leaveClass: "cover-down-leave"
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
