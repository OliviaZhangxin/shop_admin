// 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
// 安装路由
Vue.use(VueRouter)
// 实例路由
const router = new VueRouter({
  // 入口，规则，组件，出口
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home}
  ]
})
// 导出路由
export default router
