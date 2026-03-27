import { createRouter, createWebHistory } from 'vue-router'
import Err from '../components/404.vue'
import Reviews from '../components/Reviews.vue'
import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/err', component: Err },
  { path: '/reviews', component: Reviews },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
