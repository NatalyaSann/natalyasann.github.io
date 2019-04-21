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

    </table>
  </div>

</template>

<script>
import FilesService from '@/services/FilesService'
export default {
  name: 'PostsPage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await FilesService.fetchPosts()
      this.posts = response.data.posts
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
