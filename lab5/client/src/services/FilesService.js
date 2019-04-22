import api from './api'

export default {
  fetchFiles () {
    return api().get('files')
  },
  addNewFile (params) {
    return api().post('files', params)
  },
  getFile (params) {
    return api().get(`files/${params.id}`)
  },
  updateFile (params) {
    return api().put(`files/${params.id}`, params)
  },
  deleteFile (id) {
    return api().delete(`files/${id}`)
  }
}
