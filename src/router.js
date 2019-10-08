import Vue from 'vue'
import Router from 'vue-router'

// 载入页面
import Home from './views/Home'
import HelloWorld from './views/HelloWorld'
import About from './views/About'
import Article from './views/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/helloWorld',
      // name: 'helloWorld',
      alias: '/',
      component: HelloWorld
    },
    {
      path: '/home',
      // name: 'home',
      component: Home
    },
    {
      path: '/about',
      // name: 'about',
      component: About
    }, {
      path: '/articleId=:id',
      // path: '/article',
      name: "article",
      component: Article
      // props: { articleTitle: '' }

    },
    {
      // 其他不匹配路径跳转到主页
      path: "*",
      redirect: '/'
    }
  ]
})
