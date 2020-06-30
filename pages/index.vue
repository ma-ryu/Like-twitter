<template>
  <v-container>
    <v-text-field
      v-model="newPost"
      placeholder="What’s happening?"
      append-icon="mdi-send"
      @click:append="addPost"
    ></v-text-field>
    <timeline :posts="posts" />
  </v-container>
</template>

<script>
import timeline from '~/components/timeline.vue'
import { db } from '~/plugins/firebase'
export default {
  components: { timeline },
  data() {
    return {
      newPost: '',
      posts: [],
    }
  },
  mounted() {
    db.collection('posts')
      .doc('6jdKyY5AvuUy2SsRPPzX')
      .collection('post')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc
          if (change.type === 'added') {
            this.posts.unshift({ id: doc.id, ...doc.data() })
          }
        })
        // eslint-disable-next-line no-console
        console.log(this.posts)
      })
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
        })
        .then(() => {
          this.newPost = null
        })
    },
  },
}
</script>
