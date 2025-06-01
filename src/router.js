import { createRouter, createWebHashHistory } from "vue-router";
import Invitation from "./pages/Invitation.vue";
import Confirm from "./pages/Confirm.vue";
import Reject from "./pages/Reject.vue";

const routes = [
  { path: "/", component: Invitation },
  { path: "/confirm", component: Confirm },
  { path: "/reject", component: Reject },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top on navigation
    return { top: 0 };
  }
});

export default router;
