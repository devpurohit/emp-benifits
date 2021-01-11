import { createRouter, createWebHistory } from 'vue-router'
import AddCompany from '../components/AddCompany'
import Home  from '../components/Home'
import CompanyDetail from '../components/CompanyDetail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addcompany',
    name: 'AddCompany',
    component: AddCompany
  },
  {
    path: '/company/:companyId',
    name: 'CompanyDetail',
    component: CompanyDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
