import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RecipeAdd from '../components/RecipeAdd.vue'
import RecipeDelete from '../components/RecipeDelete.vue'
import ConfigDelete from '../components/ConfigDelete.vue'
import ConfigPage from '../components/ConfigPage.vue'
import ConfigEdit from '../components/ConfigEdit.vue'
import ConfigHistory from '../components/ConfigHistory.vue'
import TagInfo from '../components/TagInfo.vue'
import CameraInfo from '../components/CameraInfo.vue'
import RecipeInfo from '../components/RecipeInfo.vue'
import SystemLog from '../components/SystemLog.vue'
import RecipeDB from '../components/RecipeDB.vue'
import TagControl from '../components/TagControl.vue'
import ConfigAdd from '../components/ConfigAdd.vue'
import TagHistory from '../components/TagHistory.vue'
import TagDelete from '../components/TagDelete.vue'
import ApprovalList from '../components/ApprovalList.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/configDelete/:no/:tag/:camera/:recipeId',
    name: 'ConfigDelete',
    component: ConfigDelete,
    props: route => ({ no: route.params.no, tag: route.params.tag, camera: route.params.camera, recipeId: route.params.recipeId })
   },
  { path: '/configPage', component: ConfigPage },
  {
    path: '/configEdit/:no/:tag/:camera/:recipeId',
    name: 'ConfigEdit',
    component: ConfigEdit,
    props: route => ({ no: route.params.no, tag: route.params.tag, camera: route.params.camera, recipeId: route.params.recipeId })
  },
  { path: '/configAdd', component: ConfigAdd },
  { path: '/configHistory', component: ConfigHistory },
  {
    path: '/taginfo/:tag/:camera/:recipeId',
    name: 'TagInfo',
    component: TagInfo,
    props: route => ({ tag: route.params.tag, camera: route.params.camera, recipeId: route.params.recipeId })
  },
  {
    path: '/camerainfo/:camera/:tag/:recipeId',
    name: 'CameraInfo',
    component: CameraInfo,
    props: route => ({ camera: route.params.camera, tag: route.params.tag, recipeId: route.params.recipeId })
  },
  {
    path: '/recipeinfo/:recipeId/:tag',
    name: 'RecipeInfo',
    component: RecipeInfo,
    props: route => ({ recipeId: route.params.recipeId, tag: route.params.tag })
  },
  { path: '/log', component: SystemLog },
  { path: '/recipeDB', component: RecipeDB },
  { path: '/recipeDB/recipeAdd', component: RecipeAdd },
  { path: '/recipeDB/recipeDelete', component: RecipeDelete },
  { path: '/tag', component: TagControl },
  { path: '/tag/history', component: TagHistory },
  { path: '/tag/delete', component: TagDelete },
  { path: '/approval', component: ApprovalList }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router