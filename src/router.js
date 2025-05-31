import { createRouter, createWebHistory } from 'vue-router'
import Invitation from './pages/Invitation.vue'
import Confirm from './pages/Confirm.vue'
import Reject from './pages/Reject.vue'

const routes = [
  { path: '/', component: Invitation },
  { path: '/confirm', component: Confirm },
  { path: '/reject', component: Reject },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router