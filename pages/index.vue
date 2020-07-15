<template>
  <timeline :posts="posts" />
</template>

<script>
import timeline from '~/components/timeline.vue'
import { db } from '~/plugins/firebase'
export default {
  components: { timeline },
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    searchPosts() {
      return this.posts.filter((value) => {
        const result = value.message.text.indexOf(this.word)
        if (result !== -1) {
          return value
        }
      })
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
        // eslint-disable-next-line no-console
        console.log(this.posts)
      })
  },
}
</script>

<style scoped></style>
