import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
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
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/ProjectListView.vue"),
    },
    {
      path: "/portfolio/:test",
      name: "singleProject",
      component: () => import("../views/ProjectDetailsView.vue"),
    },
  ],
});

export default router;
