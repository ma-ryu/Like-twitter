<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <timeline />
    </v-flex>
  </v-layout>
</template>

<script>
import timeline from '~/components/timeline.vue'
export default {
  components: { timeline },
}
</script>
