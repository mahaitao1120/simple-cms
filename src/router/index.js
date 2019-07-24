import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import routes from './router.js'
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
//路由守卫
// router.beforeEach((to,from,next)=>{
//   const isLogin = localStorage.eleToken ? true : false
//   if(to.path=='/login' || to.path=='/register'){
//     next();
//   }else{
//     isLogin ? next() : next('/login')
//   }
// })
export default router