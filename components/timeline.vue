<template>
  <v-card class="pa-3">
    <!-- TODO ツイート機能はモバイルではボトムナビで表示(daialogを使う)-->
    <v-text-field
      v-model="newPost"
      placeholder="What’s happening?"
      append-icon="mdi-send"
      @click:append="addPost"
    ></v-text-field>
    <!-- TODO firebase storageにアップする機能を実装 -->
    <!-- TODO postデータに画像を含める。 選んだ画像はプレビューできる  -->
    <label>
      <v-icon>mdi-camera</v-icon>
      <input type="file" class="file" @click="fileUp" />
    </label>
    <v-card-title>Notifications</v-card-title>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="timeline">
      <v-tab-item v-for="item in items" :key="item">
        <post v-for="post in posts" :key="post.id" :post="post" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { db } from '~/plugins/firebase'
import post from '~/components/post.vue'
export default {
  components: { post },
  props: {
    posts: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      tab: null,
      items: ['All', 'Mentions'],
      newPost: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
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
    fileUp() {
      window.alert('ファイルをアップします。')
    },
  },
}
</script>

<style>
.file {
  display: none;
}
</style>
