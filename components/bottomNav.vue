<template>
  <v-bottom-navigation dark shift fixed>
    <v-btn to="/">
      <span>HOME</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/account">
      <span>ACCOUNT</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn @click.stop="dialog = !dialog">
      <span>POST</span>
      <v-icon>mdi-send</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card color="blue-grey darken-4">
        <v-card-title>
          <span class="headline">Your warble</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <add-post />
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
  </v-bottom-navigation>
</template>

<script>
import addPost from '~/components/addPost.vue'
export default {
  components: { addPost },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
