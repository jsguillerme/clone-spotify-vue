import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useStore } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !localStorage.getItem('session-[spotify-vue]')) {next({ name: 'login' })}
//   else next()
// })

export default router
