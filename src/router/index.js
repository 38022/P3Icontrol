import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
// import RecipeControl from '../components/RecipeControl.vue'
// import RecipeAdd from '../components/RecipeAdd.vue'
// import RecipeHistory from '../components/RecipeHistory.vue'
// import RecipeChange from '../components/RecipeChange.vue'
// import RecipeDelete from '../components/RecipeDelete.vue'
import SystemSetting from '../components/SystemSetting.vue'
import TagInfo from '../components/TagInfo.vue'
import CameraInfo from '../components/CameraInfo.vue'
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
  // { path: '/recipe/add', component: RecipeAdd },
  // { path: '/recipe/history', component: RecipeHistory },
  // { path: '/recipe/change', component: RecipeChange },
  // { path: '/recipe/delete', component: RecipeDelete },
  { path: '/setting', component: SystemSetting },
  {
    path: '/taginfo/:no/:tag/:camera',
    name: 'TagInfo',
    component: TagInfo,
    props: route => ({ tag: route.params.tag, camera: route.params.camera })
  },
  {
    path: '/camerainfo/:no/:camera/:tag',
    name: 'CameraInfo',
    component: CameraInfo,
    props: route => ({ camera: route.params.camera, tag: route.params.tag })
  },
  { path: '/log', component: SystemLog },
  { path: '/recipeDB', component: RecipeDB },
  { path: '/tag', component: TagControl },
  { path: '/settingAdd', component: SettingAdd },
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