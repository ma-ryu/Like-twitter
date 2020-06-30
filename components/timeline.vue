<template>
  <v-card>
    <v-card-title>Notifications</v-card-title>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <post />
        <post />
        <post />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import post from '~/components/post.vue'
export default {
  components: { post },
  data() {
    return {
      tab: null,
      items: ['All', 'Mentions'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>
