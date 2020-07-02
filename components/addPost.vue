<template>
  <div>
    <v-textarea
      v-model="newPost"
      placeholder="What’s happening?"
      auto-grow
      rows="3"
      :rules="[limit]"
      outlined
    ></v-textarea>
    <v-img
      v-if="uploadImageUrl"
      :src="uploadImageUrl"
      contain
      width="100%"
      max-height="300px"
    />
    <v-divider v-show="uploadImageUrl" class="my-5"></v-divider>
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
import { db } from '~/plugins/firebase'
export default {
  data() {
    return {
      newPost: '',
      file: null,
      imageUrl: null,
      uploadImageUrl: '',
      limit: (value) => value.length <= 140 || '140文字以内', // 文字数の制約
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
          this.uploadImageUrl = FileRead.result
        })
      } else {
        this.uploadImageUrl = ''
      }
    },
    addPost() {
      const field = db
        .collection('posts')
        .doc('6jdKyY5AvuUy2SsRPPzX')
        .collection('post')
      field
        .add({
          text: this.newPost,
          createdAt: new Date().getTime(),
          user: {
            name: this.user.displayName,
            thumbnail: this.user.photoURL,
          },
        })
        .then(() => {
          this.newPost = null
        })
    },
  },
}
</script>
