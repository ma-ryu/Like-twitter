<template>
  <div>
    <v-textarea
      v-model="newPost"
      placeholder="What’s happening?"
      auto-grow
      rows="3"
      outlined
    ></v-textarea>
    <v-img
      v-if="previewImageUrl"
      :src="previewImageUrl"
      contain
      width="100%"
      max-height="300px"
    />
    <v-divider v-show="previewImageUrl" class="my-5"></v-divider>
    <v-row class="px-10">
      <v-file-input
        v-model="file"
        hide-input
        class="mt-0 pt-0"
        accept="image/*"
        prepend-icon="mdi-camera"
        @change="onFileChange"
      />
      <v-btn icon @click="addPost">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  prop: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      newPost: '',
      link: '',
      file: null,
      fileName: '',
      previewImageUrl: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    onFileChange(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return
        }
        const FileRead = new FileReader()
        FileRead.readAsDataURL(file)
        FileRead.addEventListener('load', () => {
          this.previewImageUrl = FileRead.result
        })
        this.fileName = this.file.name
      } else {
        this.previewImageUrl = ''
      }
    },
    async addPost() {
      const pat = /(https?:\/\/[\x21-\x7E]+)/g
      const makeLink = function (url) {
        return `<a href=${url} target="_blank">${url}</a>`
      }
      if (this.newPost.match(pat)) {
        this.newPost = this.newPost.replace(pat, makeLink)
      }
      const contents = {
        user: {
          id: this.user.uid,
          name: this.user.displayName,
          thumbnail: this.user.photoURL,
        },
        createdAt: new Date().getTime(),
        message: {
          text: this.newPost,
        },
        image: {
          file: this.file,
          name: this.fileName,
        },
      }
      await this.$store.dispatch('addPost', contents).then(() => {
        this.newPost = null
        this.$emit('closeDialog')
      })
      console.log('finish')
    },
  },
}
</script>
