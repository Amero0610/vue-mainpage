import Vue from 'vue'
import VueRouter from 'vue-router'
import com_MainPage from '../views/mainPage.vue'
import com_TestPage from '../views/timerPage.vue'
import com_clockPage from '../views/clockPage.vue'
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
    component:com_TestPage
  },
  {
    path:'/clockpage',
    name:"ClockPage",
    component:com_clockPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
