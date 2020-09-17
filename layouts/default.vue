<template>
  <v-app dark>
    <main>
      <v-row justify="center">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2">
          <userNav />
        </v-col>
        <v-col cols="12" md="6" class="pa-0">
          <div>
            <nuxt />
          </div>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="3">
          <sidebar />
        </v-col>
      </v-row>
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        dark
        fab
        color="primary"
        class="fab"
        @click="dialog = !dialog"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="600px">
        <v-card color="blue-grey darken-4">
          <v-card-title>
            <span class="headline">Your warble</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <add-post @closeDialog="close" />
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <bottomNav v-if="$vuetify.breakpoint.smAndDown" />
    </main>
    <v-footer class="text-center">
      <span class="mx-auto">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import userNav from '~/components/userNav.vue'
import sidebar from '~/components/sidebar.vue'
import addPost from '~/components/addPost.vue'
import bottomNav from '~/components/bottomNav.vue'

export default {
  components: { userNav, sidebar, addPost, bottomNav },
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

<style>
main {
  height: 100vh;
  overflow: scroll;
}
.fab {
  position: absolute;
  bottom: 10%;
  left: 80%;
}
</style>
