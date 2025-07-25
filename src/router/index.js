import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RecipeControl from '../components/RecipeControl.vue'
import RecipeAdd from '../components/RecipeAdd.vue'
import RecipeHistory from '../components/RecipeHistory.vue'
import RecipeChange from '../components/RecipeChange.vue'
import RecipeDelete from '../components/RecipeDelete.vue'
import P3Setteing from '../components/P3Setteing.vue'
import TagControl from '../components/TagControl.vue'
import TagAdd from '../components/TagAdd.vue'
import TagHistory from '../components/TagHistory.vue'
import TagChange from '../components/TagChange.vue'
import TagDelete from '../components/TagDelete.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recipe', component: RecipeControl },
  { path: '/recipe/add', component: RecipeAdd },
  { path: '/recipe/history', component: RecipeHistory },
  { path: '/recipe/change', component: RecipeChange },
  { path: '/recipe/delete', component: RecipeDelete },
  { path: '/setting', component: P3Setteing },
  { path: '/tag', component: TagControl },
  { path: '/tag/add', component: TagAdd },
  { path: '/tag/history', component: TagHistory },
  { path: '/tag/change', component: TagChange },
  { path: '/tag/delete', component: TagDelete }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router