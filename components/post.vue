<template>
  <v-card color="basil" flat>
    <v-row justify="center">
      <v-col cols="md-1" class="pt-10">
        <v-row justify="center">
          <v-icon>mdi-account</v-icon>
        </v-row>
      </v-col>
      <v-col cols="md-10">
        <v-card-subtitle class="pa-1">maryu@warble</v-card-subtitle>
        <v-card-text class="pa-1">
          {{ post.text }}
        </v-card-text>
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
    <v-divider />
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
