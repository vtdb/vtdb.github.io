import { createRouter, createWebHistory } from 'vue-router'
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS, LIST_TYPE_SPECIES } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP, PAGE_TYPE_SPECIES } from '@/utils/consts/pageTypes';
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/vtubers',
      name: LIST_TYPE_VTUBERS,
      component: () => import('@/views/VtubersListView.vue'),
    },
    {
      path: '/v/:id',
      name: PAGE_TYPE_VTUBER,
      component: () => import('@/views/VtuberView.vue'),
    },
    {
      path: '/groups',
      name: LIST_TYPE_GROUPS,
      component: () => import('@/views/GroupsListView.vue'),
    },
    {
      path: '/g/:id',
      name: PAGE_TYPE_GROUP,
      component: () => import('@/views/GroupView.vue'),
    },
  ]
})

export default router
