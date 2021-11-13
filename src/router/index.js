import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import NestedPages from '../views/NestedPages.vue';
import NestedPageOne from '../components/NestedPageOne.vue';
import NestedPageTwo from '../components/NestedPageTwo.vue';

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
    path: '/fallen-kingdom-wiki/nested',
    component: NestedPages,
    children: [
      {
        path: '/fallen-kingdom-wiki/nested/one',
        component: NestedPageOne
      },
      {
        path: '/fallen-kingdom-wiki/nested/two',
        component: NestedPageTwo
      }
    ]
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