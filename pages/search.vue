<template>
  <div>
    <toolbar v-model="word" :word="word" />
    <timeline
      v-if="searchPosts != 0"
      :posts="searchPosts"
      @input="value = $event"
    />
    <v-card v-else>
      <v-card-title>
        検索キーワードを入力してください
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
import { db } from '~/plugins/firebase'
import toolbar from '~/components/toolbar'
import timeline from '~/components/timeline'
export default {
  components: { toolbar, timeline },
  data() {
    return {
      posts: [],
      word: this.$route.query.word,
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
      })
  },
}
</script>
