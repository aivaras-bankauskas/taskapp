import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTasks() {
    return apiClient.get('/tasks')
  },
  getTask(id) {
    return apiClient.get('/tasks/' + id)
  },
  storeTask(task) {
    return apiClient.post('/tasks', task)
  },
  updateTask(id, task) {
    return apiClient.patch('/tasks/' + id, task)
  },
  destroyTask(id) {
    return apiClient.delete('/tasks/' + id)
  }
}
