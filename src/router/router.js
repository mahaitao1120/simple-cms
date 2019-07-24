// import Home from '@/views/Home.vue'
export default  [
    {
      path:'/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/index.vue'),
      children:[
        {
          path:'/',
          component:()=>import('@/views/Home.vue')
        },
        {
          path:'/home',
          component:()=>import('@/views/Home.vue')
        },
        {
          path:'/infoshow',
          component:()=>import('@/views/InfoShow.vue')
        },
        {
          path:'/fundlist',
          name:'fundlist',
          component:()=>import('@/views/FundList.vue')
        }
      ]
    },
    {
      path:'/register',
      name:'register',
      component: () => import('@/views/register.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/login.vue')

    },
    {
      path:'*',
      name:'404',
      component: () => import('@/views/404.vue')
    },
   
  ]

//路由守卫
// router.beforeEach((to, from, next) => {
//   // ${//to and from are Route Object,next() must be called to resolve the hook}
//   const isLogin = localStorage.eleToken ? true : false;
//   if(to.path == '/login'||to.path == '/register'){
//     next()
//   }else{
//     isLogin ? next() :next('/login')
//   }
// })