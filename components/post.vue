<template>
  <!--  リプライ機能をつける -->
  <v-card>
    <v-row justify="center" class="mx-0">
      <v-col cols="2" class="pa-2 pt-4 d-flex justify-center">
        <v-avatar v-if="post.message.user.name" size="48px">
          <v-img :src="post.message.user.thumbnail" contain />
        </v-avatar>
        <v-icon v-else>mdi-account</v-icon>
      </v-col>
      <v-col cols="10" class="pa-2">
        <v-card-subtitle class="pa-1">
          {{ post.message.user.name }}
        </v-card-subtitle>
        <v-card-text class="pa-1">{{ post.message.text }}</v-card-text>
        <v-img v-if="post.image.src" :src="post.image.src"></v-img>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
