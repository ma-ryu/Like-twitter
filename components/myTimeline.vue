<template>
  <div>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab>
        WARBLES
        <span class="ml-2">{{ `${posts.length}件` }}</span>
      </v-tab>
      <v-tab>
        MEDIA
        <span class="ml-2">{{ `${myMedia.length}件` }}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="timeline">
      <v-tab-item>
        <post v-for="post in posts" :key="post.id" :post="post" />
      </v-tab-item>
      <v-tab-item>
        <post v-for="post in myMedia" :key="post.id" :post="post" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
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
    }
  },
  computed: {
    myMedia() {
      return this.posts.filter((v) => v.image.name != null)
    },
  },
}
</script>
