<template>
  <div>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab>WARBLES</v-tab>
      <v-tab>MEDIA</v-tab>
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
