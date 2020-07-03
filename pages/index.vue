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
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  },
  mounted() {
    db.collection('posts')
      .doc('6jdKyY5AvuUy2SsRPPzX')
      .collection('post')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc
          console.log(doc.data())
          if (change.type === 'added') {
            this.posts.push({ id: doc.id, ...doc.data() })
          }
        })
        // eslint-disable-next-line no-console
        console.log(this.posts)
      })
  },
}
</script>

<style scoped></style>
