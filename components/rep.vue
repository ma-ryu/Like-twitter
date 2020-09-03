<template>
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
          <v-card-subtitle class="pa-1">{{ post.user.name }}</v-card-subtitle>
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
        </v-card-actions>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
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
