<template>
  <v-app dark>
    <main>
      <v-row justify="center">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2">
          <userNav />
        </v-col>
        <v-col cols="12" md="6">
          <v-container>
            <nuxt />
          </v-container>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="3">
          <sidebar />
        </v-col>
      </v-row>
      <bottomNav v-if="$vuetify.breakpoint.smAndDown" />
    </main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import userNav from '~/components/userNav.vue'
import sidebar from '~/components/sidebar.vue'
import bottomNav from '~/components/bottomNav.vue'
export default {
  components: { userNav, sidebar, bottomNav },
  middleware: 'authenticated',
}
</script>

<style>
main {
  height: 100vh;
  overflow: scroll;
}
</style>
