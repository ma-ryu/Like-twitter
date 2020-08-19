<template>
  <div>
    <v-toolbar class="px-5">
      <v-btn icon to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <post
      v-for="post in displayPost"
      :key="post.id"
      :post="post"
      class="mb-5"
    />
    <div v-for="re in rep" :key="re.index">
      <rep :post="re" />
    </div>
  </div>
</template>

<script>
import post from '~/components/post.vue'
import rep from '~/components/rep.vue'
import { db } from '~/plugins/firebase'
export default {
  components: { post, rep },
  data() {
    return {
      posts: [],
      rep: null,
    }
  },
  computed: {
    displayPost() {
      return this.posts.filter((v) => v.id === this.$route.params.id)
    },
  },
  mounted() {
    db.collection('posts')
      .doc('6jdKyY5AvuUy2SsRPPzX')
      .collection('post')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc
          if (change.type === 'added') {
            this.posts.unshift({ id: doc.id, ...doc.data() })
          }
          if (change.type === 'removed') {
            this.posts.splice(doc.id, 1)
          }
        })
      })
  },
}
</script>

<style scoped></style>
