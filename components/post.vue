<template>
  <!--  TODO リプライ機能をつける -->
  <!--  TODO コンポーネント切り分け -->
  <!--  TODO 処理をストアに移動 -->
  <v-card>
    <v-row justify="center" class="mx-0">
      <v-col cols="2" class="pa-2 pt-4 d-flex justify-center">
        <v-avatar v-if="post.user.name" size="48px">
          <v-img :src="post.user.thumbnail" contain />
        </v-avatar>
        <v-icon v-else>mdi-account</v-icon>
      </v-col>
      <v-col cols="10" class="pa-2">
        <v-row justify="space-between">
          <v-card-subtitle class="pa-1">
            {{ post.user.name }}
          </v-card-subtitle>
          <v-btn icon @click="dialog = !dialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-card-text class="pa-1">{{ post.message.text }}</v-card-text>
        <v-img v-if="post.image.src" :src="post.image.src"></v-img>
        <v-spacer></v-spacer>
        <v-card-actions>
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
            <v-btn color="blue darken-1" rounded @click="removePost(post.id)">
              YES
            </v-btn>
            <v-btn rounded @click="dialog = false">
              NO
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="reply" max-width="600px">
      <v-card color="blue-grey darken-4">
        <v-btn color="blue darken-1" icon @click="reply = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
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
              <v-card-subtitle class="pa-2">
                {{ post.user.name }}
              </v-card-subtitle>
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
              <v-textarea outlined placeholder="WARBLE YOUR REPLY"></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row class="px-10" justify="center">
            <v-file-input
              hide-input
              class="mt-0 pt-0"
              accept="image/*"
              prepend-icon="mdi-camera"
            />
            <v-btn icon>
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
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
  },
}
</script>
