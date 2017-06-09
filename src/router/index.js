import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList/ArticleList.vue'
import User from '@/components/User/User.vue'
import Article from '@/components/ArticleList/Article.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/user/:name?',
      name: 'user',
      component: User
    }
  ]
})
