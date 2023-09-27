import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      props: true
    },
    {
      path: '/president',
      name: 'president',
      component: () => import('../views/President.vue')
    },
    {
      path: '/information',
      name: 'information',
      component: () => import('../views/Information.vue'),
      meta: {
        requireClub: true
      }
    },
    {
      path: '/Calendar',
      name: 'calendar',
      component: () => import('../views/Calendar.vue')
    },
  ]
})

router.beforeEach
export default router
