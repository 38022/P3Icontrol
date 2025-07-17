import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RecipeControl from '../components/RecipeControl.vue'
import TagControl from '../components/TagControl.vue'
import TagAdd from '../components/TagAdd.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recipe', component: RecipeControl },
  { path: '/tag', component: TagControl },
  { path: '/tag/add', component: TagAdd }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router