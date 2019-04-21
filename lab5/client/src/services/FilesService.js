import api from '@/services/api'

export default {
  fetchPosts () {
    return api().get('files')
  },
  addNewFile (params) {
    return api().post('files', params)
  }
}
