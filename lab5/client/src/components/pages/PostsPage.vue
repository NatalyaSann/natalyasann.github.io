/* eslint-disable */
<template>
  <div>
    <h1>Documents</h1>
    <button type="button" class="btn btn-dark">Create new file</button>
    <table class="table table-bordered">
      <thead>
      <tr class="bg-primary text-white">
        <th scope="col">№</th>
        <th scope="col">name</th>
        <th scope="col">action</th>
      </tr>
      </thead>

    </table>
  </div>

</template>

<script>
  export default {
    name: 'StartPage',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App suka'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
