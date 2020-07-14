<template>
  <v-toolbar height="70px">
    <v-avatar>
      <v-img :src="user.photoURL" />
    </v-avatar>
    <v-text-field
      :value="word"
      prepend-inner-icon="mdi-magnify"
      placeholder="search twitter..."
      filled
      rounded
      dense
      hide-details
      class="mx-3"
      @input="$emit('input', $event)"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>
