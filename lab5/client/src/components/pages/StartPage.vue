/* eslint-disable */
<template>
  <div>
    <h1>Documents</h1>
    <button type="button" class="btn btn-dark">Create new file</button>
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
import PostsService from '@/services/PostsService'
export default {
  name: 'PostsPage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
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
