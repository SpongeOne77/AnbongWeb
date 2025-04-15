import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('../views/SolutionProfile.vue'),
    },
    {
      path: '/landingCases',
      name: 'landingCases',
      component: () => import('../views/LandingCases.vue'),
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: () => import('../views/NewsPage.vue'),
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('../views/ContactUs.vue'),
    }
  ]
})

export default router
