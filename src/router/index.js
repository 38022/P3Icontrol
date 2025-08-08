import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
// import RecipeControl from '../components/RecipeControl.vue'
import RecipeAdd from '../components/RecipeAdd.vue'
import RecipeHistory from '../components/RecipeHistory.vue'
import RecipeChange from '../components/RecipeChange.vue'
import SettingDelete from '../components/SettingDelete.vue'
import SystemSetting from '../components/SystemSetting.vue'
import SettingEdit from '../components/SettingEdit.vue'
import SettingHistory from '../components/SettingHistory.vue'
import TagInfo from '../components/TagInfo.vue'
import CameraInfo from '../components/CameraInfo.vue'
import RecipeInfo from '../components/RecipeInfo.vue'
import SystemLog from '../components/SystemLog.vue'
import RecipeDB from '../components/RecipeDB.vue'
import TagControl from '../components/TagControl.vue'
import SettingAdd from '../components/SettingAdd.vue'
import TagHistory from '../components/TagHistory.vue'
// import TagChange from '../components/TagChange.vue'
import TagDelete from '../components/TagDelete.vue'
import ApprovalList from '../components/ApprovalList.vue'

const routes = [
  { path: '/', component: HomePage },
  // { path: '/recipe', component: RecipeControl },
  { path: '/settingDelete/:no/:tag/:camera/:recipeId',
    name: 'SettingDelete',
    component: SettingDelete,
    props: route => ({ no: route.params.no, tag: route.params.tag, camera: route.params.camera, recipeId: route.params.recipeId })
   },
  { path: '/setting', component: SystemSetting },
  {
    path: '/settingEdit/:no/:tag/:camera/:recipeId',
    name: 'SettingEdit',
    component: SettingEdit,
    props: route => ({ no: route.params.no, tag: route.params.tag, camera: route.params.camera, recipeId: route.params.recipeId })
  },
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
  { path: '/recipeDB/recipeHistory', component: RecipeHistory },
  { path: '/recipeDB/recipeAdd', component: RecipeAdd },
  { path: '/recipeDB/recipeChange', component: RecipeChange },
  { path: '/tag', component: TagControl },
  { path: '/settingAdd', component: SettingAdd },
  { path: '/settingHistory', component: SettingHistory },
  { path: '/tag/history', component: TagHistory },
  // { path: '/tag/change', component: TagChange },
  { path: '/tag/delete', component: TagDelete },
  { path: '/approval', component: ApprovalList }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router