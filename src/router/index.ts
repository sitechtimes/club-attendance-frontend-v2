import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/:club?",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/president",
      name: "president",
      component: () => import("../views/PresidentView.vue"),
    },
    {
      path: "/club",
      name: "club",
      component: () => import("../views/ClubView.vue"),
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
      path: "/loading",
      name: "loading",
      component: () => import("../views/Loading.vue"),
    },
    {
      path: '/confirmation/:club?',
      name: 'confirmation',
      component: () => import('../views/ConfirmationView.vue')
    },
    {
      path: "/student",
      name: "student",
      component: () => import("../views/StudentView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/404.vue"),
    },
    {
      path: "/ConfirmImage",
      name: "confirmimage",
      component: () => import("../views/ConfirmImage.vue"),
    },
  ],
});

router.beforeEach;
export default router;
