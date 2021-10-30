import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/fallen-kingdom-wiki/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fallen-kingdom-wiki/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;