<template>
  <div>
    <v-card-title>
      <span class="headline">REPLY</span>
    </v-card-title>
    <v-card-text class="px-1">
      <v-row justify="center" class="mx-0">
        <v-col cols="2" class="pa-2 pt-4 d-flex justify-center">
          <v-avatar v-if="post.user.name" size="36px">
            <v-img :src="post.user.thumbnail" contain />
          </v-avatar>
          <v-icon v-else>mdi-account</v-icon>
        </v-col>
        <v-col cols="10" class="pa-2">
          <v-card-subtitle class="pa-2">{{ post.user.name }}</v-card-subtitle>
          <v-card-text class="pa-1">{{ post.message.text }}</v-card-text>
          <v-img v-if="post.image.src" :src="post.image.src"></v-img>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
      <v-row justify="center" class="mx-0">
        <v-col cols="2" class="pa-2 pt-4 d-flex justify-center">
          <v-avatar v-if="post.user.name" size="36px">
            <v-img :src="user.photoURL" contain />
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <v-textarea
            v-model="newReply"
            outlined
            placeholder="WARBLE YOUR REPLY"
          ></v-textarea>
          <v-img
            v-if="previewImageUrl"
            :src="previewImageUrl"
            contain
            width="100%"
            max-height="300px"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row class="px-10" justify="center">
        <v-file-input
          v-model="file"
          hide-input
          class="mt-0 pt-0"
          accept="image/*"
          prepend-icon="mdi-camera"
          @change="onFileChange"
        />
        <v-btn icon @click="addReply">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
    post: {
      type: Object,
      required: true,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false,
    },
  },
  data() {
    return {
      newReply: '',
      file: null,
      fileName: '',
      previewImageUrl: '',
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
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
    async addReply() {
      const contents = {
        id: this.post.id,
        user: {
          id: this.user.uid,
          name: this.user.displayName,
          thumbnail: this.user.photoURL,
        },
        createdAt: new Date().getTime(),
        message: {
          text: this.newReply,
        },
        image: {
          file: this.file,
          name: this.fileName,
        },
      }
      await this.$store.dispatch('addReply', contents).then(() => {
        this.newReply = null
        this.$emit('closeDialog')
      })
      console.log('finish')
    },
  },
}
</script>
