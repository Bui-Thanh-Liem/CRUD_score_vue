import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StudentManagementPage from '../views/StudentManagementPage.vue'
import SubjectManagementPage from '../views/SubjectManagementPage.vue'
import StudentDetailPage from '../views/StudentDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/studentManagement',
    name: 'StudentManagement',
    component: StudentManagementPage
  },
  {
    path: '/subjectManagement',
    name: 'SubjectManagementPage',
    component: SubjectManagementPage
  },
  {
    path: '/studentDetail/:id',
    name: 'StudentDetailPage',
    component: StudentDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
