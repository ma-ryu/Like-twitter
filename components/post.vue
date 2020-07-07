<template>
  <!--  リプライ機能をつける -->
  <v-card>
    <v-row justify="center" class="mx-0">
      <v-col cols="2" class="pa-2 pt-4 d-flex justify-center">
        <v-avatar v-if="post.message.user.name" size="48px">
          <v-img :src="post.message.user.thumbnail" contain />
        </v-avatar>
        <v-icon v-else>mdi-account</v-icon>
      </v-col>
      <v-col cols="10" class="pa-2">
        <v-row justify="space-between">
          <v-card-subtitle class="pa-1">
            {{ post.message.user.name }}
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
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          <v-btn icon>
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
    }
  },
  methods: {
    removePost(postId) {
      db.collection('posts')
        .doc('6jdKyY5AvuUy2SsRPPzX')
        .collection('post')
        .doc(postId)
        .delete()
    },
  },
}
</script>
