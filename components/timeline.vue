<template>
  <v-card class="pa-3">
    <!-- TODO ツイート機能はモバイルではボトムナビで表示(daialogを使う)-->
    <!-- TODO firebase storageにアップする機能を実装 -->
    <!-- TODO postデータに画像を含める。 選んだ画像はプレビューできる  -->
    <addPost v-if="$vuetify.breakpoint.mdAndUp" />
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
import post from '~/components/post.vue'
import addPost from '~/components/addPost.vue'

export default {
  components: { post, addPost },
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
    }
  },
  methods: {},
}
</script>
