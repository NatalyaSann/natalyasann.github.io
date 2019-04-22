import api from '@/services/api'

export default {
  fetchFiles () {
    return api().get('files')
  },
  addNewFile (params) {
    return api().post('files', params)
  }
}
