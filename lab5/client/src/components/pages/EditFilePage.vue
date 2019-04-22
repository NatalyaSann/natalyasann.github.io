<template>
  <form>
    <div class="container">
      <div class="form-group">
        <label for="name-text" class="h3">File name</label>
        <input type="text" class="form-control" id="name-text" placeholder="File name" v-model="file.title" required>
        <div class="valid-feedback">
          Everythin's ok
        </div>
        <div class="invalid-feedback">
          Please, enter file name
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h3 class="text-dark">Enter text</h3>
        </div>
        <div class="col-6">
          <h3 class="text-dark">See the result</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <textarea class="form-control border-dark" rows="15" v-model="file.description" required></textarea>
          <div class="valid-feedback">
            Everythin's ok
          </div>
          <div class="invalid-feedback">
            Please, enter text
          </div>
        </div>
        <div class="col-6">
          <div class = "h-100 form-control border border-dark scroll" v-html="preview"></div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <button type="button" class="btn btn-dark" @click="editFile()">Save</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import FilesService from '../../services/FilesService'
const marked = require('marked')
export default {
  name: 'EditFilePage',
  data () {
    return {
      file: {
        title: '',
        description: ''
      }
    }
  },
  computed: {
    preview () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      })
      return marked(this.file.description)
    }
  },
  methods: {
    async getFile () {
      const response = await FilesService.getFile({id: this.$route.params.id})
      this.file.title = response.data.title
      this.file.description = response.data.description
    },
    async editFile () {
      if (this.file.title !== '' && this.file.description !== '') {
        await FilesService.updateFile({
          id: this.$route.params.id,
          title: this.file.title,
          description: this.file.description
        })
        this.goBack()
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {
      this.$router.push({ name: 'Files' })
    }
  },
  mounted () {
    this.getFile()
  }
}
</script>

<style scoped>
</style>
