import { createRouter, createWebHistory } from 'vue-router'
import SiteHome from '../views/SiteHome'
import PortfolioDetail from '../views/PortfolioDetail'

const routes = [
  {
    path: '/',
    name: 'SiteHome',
    component: SiteHome,
    meta: {
      desc: "Webエンジニア・河村智之のポートフォリオサイトです。",
    },
  },
  {
    path: '/portfolio-detail',
    name: 'PortfolioDetail',
    component: PortfolioDetail,
    meta: {
      title: "ポートフォリオ詳細",
      desc: "Webエンジニア・河村智之のポートフォリオサイトです。ここでは私のポートフォリオを紹介します。",
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  }
})

export default router
