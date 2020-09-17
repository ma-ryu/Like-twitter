<template>
  <div>
    <addPost v-if="$vuetify.breakpoint.mdAndUp && $route.name != 'search'" />
    <v-card-title>Notifications</v-card-title>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
        <span class="ml-2">{{ `${posts.length}件` }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="timeline">
      <v-tab-item v-for="item in items" :key="item">
        <post v-for="post in posts" :key="post.id" :post="post" />
      </v-tab-item>
    </v-tabs-items>
  </div>
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
}
</script>
