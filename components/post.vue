/* eslint-disable vue/no-v-html */
<template>
  <!--  TODO リプライ機能をつける -->
  <!--  TODO コンポーネント切り分け -->
  <!--  TODO 処理をストアに移動 -->
  <div>
    <v-row justify="center" no-gutters class="px-2">
      <v-col cols="2">
        <v-avatar v-if="post.user.name" size="40px" class="d-flex mx-auto mt-5">
          <v-img :src="post.user.thumbnail" contain />
        </v-avatar>
        <v-icon v-else>mdi-account</v-icon>
      </v-col>
      <v-col cols="10" class="pa-2">
        <v-row justify="space-between">
          <v-card-subtitle class="pa-1">{{ post.user.name }}</v-card-subtitle>
          <v-btn icon class="mr-3" @click="dialog = !dialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <div class="pa-1 white-space" v-html="$sanitize(post.message.text)" />
        <v-img v-if="post.image.src" :src="post.image.src"></v-img>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn v-if="post.id" :to="`/warble/${post.id}`" text>
            MORE
          </v-btn>
          <v-spacer></v-spacer>
          <div class="like">
            <v-btn icon :color="isLike ? 'pink' : 'default'" @click="like">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            {{ liked }}
          </div>
          <v-btn icon>
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          <v-btn icon @click="reply = !reply">
            <v-icon>mdi-comment-outline</v-icon>
            <span v-if="rep.length > 0">{{ rep.length }}</span>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card color="blue-grey darken-4">
        <v-card-title>
          <span class="headline">本当に削除しますか？</span>
        </v-card-title>
        <v-row justify="space-around">
          <v-card-actions class="text-center">
            <v-btn color="blue darken-1" rounded @click="removePost(post.id)"
              >YES</v-btn
            >
            <v-btn rounded @click="dialog = false">NO</v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="reply" max-width="600px">
      <v-card color="blue-grey darken-4">
        <v-btn color="blue darken-1" icon @click="reply = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <add-reply :dialog="reply" :post="post" @closeDialog="close" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
import addReply from '~/components/addReply.vue'

export default {
  components: { addReply },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rep: [],
      dialog: false,
      reply: false,
      isLike: false,
      liked: null,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  mounted() {
    db.collection('posts')
      .doc('6jdKyY5AvuUy2SsRPPzX')
      .collection('post')
      .doc(this.post.id)
      .collection('reply')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc
          if (change.type === 'added') {
            this.rep.unshift({ id: doc.id, ...doc.data() })
          }
          if (change.type === 'removed') {
            this.rep.splice(doc.id, 1)
          }
        })
        // eslint-disable-next-line no-console
        console.log(this.posts)
      })
  },
  created() {
    this.$parent.rep = this.rep
  },
  methods: {
    removePost(postId) {
      db.collection('posts')
        .doc('6jdKyY5AvuUy2SsRPPzX')
        .collection('post')
        .doc(postId)
        .delete()
    },
    async like() {
      if (this.isLike === true) {
        this.isLike = false
        this.liked === 1 ? (this.liked = null) : this.liked--
      } else if (this.isLike === false) {
        this.isLike = true
        this.liked++
        await this.$store.dispatch('addMyFavorite', this.post)
      }
    },
    close() {
      this.dialog = false
    },
  },
}
</script>

<style scoped>
.white-space {
  white-space: pre-wrap;
}
</style>
