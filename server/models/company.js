import axios from 'axios'

class Company {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000/' // json-server endpoint
    })
  }

  // Always sorted
  list() {
    return this.api.get('/companies?_sort=employeeCount').then(res => res.data)
  }

  find(id) {
    return this.api.get(`/companies/${id}`).then(res => res.data)
  }

  create(data) {
    return this.api.post('/companies', data).then(res => res.data)
  }
  
}

export default new Company()