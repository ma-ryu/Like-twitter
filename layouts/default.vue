<template>
  <v-app dark>
    <v-content>
      <v-row justify="center">
        <v-col cols="md-2">
          <userNav />
        </v-col>
        <v-col cols="md-5">
          <v-container>
            <nuxt />
          </v-container>
        </v-col>
        <v-col cols="md-3">
          <sidebar />
        </v-col>
      </v-row>
    </v-content>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import userNav from '~/components/userNav.vue'
import sidebar from '~/components/sidebar.vue'
export default {
  components: { userNav, sidebar },
  data() {
    return {
      fixed: false,
    }
  },
}
</script>

<style></style>
