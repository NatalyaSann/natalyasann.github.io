/* eslint-disable */
<template>
  <div>
    <h1>Documents</h1>
    <router-link tag="div" :to="{ name: 'NewFile' }">
      <a class="btn btn-dark" role="button">Create new file</a>
    </router-link>
    <table class="table table-bordered">
      <thead>
      <tr class="bg-light text-black-50">
        <th scope="col">№</th>
        <th scope="col">name</th>
        <th scope="col">action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="files.length" v-for="(file, index) in files" :key="file.id">
        <th scope="row" class="align-middle">{{index}}</th>
        <td class="col-md-2 align-middle">{{file.title}}</td>
        <td class="col-md-1 align-middle">
          <router-link :to="{ name: 'EditFile', params: { id: file._id } }"><button class="btn btn-dark">Change</button></router-link>
          <button class="btn btn-danger mt-2" @click="removeFile(file._id)">Delete</button>
        </td>
      </tr>
      <tr v-if="!files.length">
        <td class="align-middle text-center" colspan="4">There is no files yet</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FilesService from '../../services/FilesService'
export default {
  name: 'StartPage',
  data () {
    return {
      files: []
    }
  },
  methods: {
    async getFiles () {
      const response = await FilesService.fetchFiles()
      this.files = response.data.files
    },

    async removeFile (id) {
      await FilesService.deleteFile(id)
      this.getFiles()
    }
  },
  mounted () {
    this.getFiles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
