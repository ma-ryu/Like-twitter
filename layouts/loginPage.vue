<template>
  <v-app dark>
    <main>
      <v-container>
        <nuxt />
      </v-container>
      <bottomNav v-if="$vuetify.breakpoint.smAndDown" />
    </main>
    <v-footer class="text-center">
      <span class="mx-auto">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import bottomNav from '~/components/bottomNav.vue'

export default {
  components: { bottomNav },
  middleware: 'authenticated',
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    close() {
      this.dialog = false
    },
  },
}
</script>

<style></style>
