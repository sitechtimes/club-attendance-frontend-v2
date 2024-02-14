import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/404",
      name: "404",
      component: () => import("../views/404.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      props: true,
    },
    {
      path: "/president",
      name: "president",
      component: () => import("../views/PresidentView.vue"),
    },
    {
      path: '/club',
      name: 'club',
      component: () => import('../views/ClubView.vue'),
      meta: {
        requireClub: true,
      },
    },
    {
      path: "/Calendar",
      name: "calendar",
      component: () => import("../views/Calendar.vue"),
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('../views/ConfirmationView.vue')
    },
    {
      path: "/student",
      name: "student",
      component: () => import("../views/StudentView.vue"),
    },
  ],
});

router.beforeEach;
export default router;
