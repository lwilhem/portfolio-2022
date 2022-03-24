import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contactme",
      name: "contactme",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/ProjectListView.vue"),
    },
  ],
});

export default router;
