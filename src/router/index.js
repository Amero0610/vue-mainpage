import Vue from 'vue'
import VueRouter from 'vue-router'
import com_MainPage from '../views/mainPage.vue'
import com_Test_Page from '../views/timerPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'MainPage' } 
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    component: com_MainPage
  },
  {
    path:'/timerpage',
    name:"TimerPage",
    component:com_Test_Page
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
