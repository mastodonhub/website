import Login from '@/views/login/login'
import Layout from '@/views/layout/layout'
import home from '@/views/home/home'
export default [
  { path: '/login', name: 'login', title: '登录', component: Login, hidden: true },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: (resolve) => resolve(home, resolve)
      }
    ]
  }
]
