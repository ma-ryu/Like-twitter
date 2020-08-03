<template>
  <!-- TODO 内容を精査 -->
  <div class="ma-3">
    <v-text-field
      v-if="$route.name != 'search'"
      v-model="word"
      prepend-inner-icon="mdi-magnify"
      placeholder="search twitter..."
      filled
      rounded
      dense
      @keydown.enter="
        $router.replace({ name: 'search', query: { word: word } })
      "
    ></v-text-field>
    <v-card width="100%" class="mx-auto mb-3">
      <v-list rounded>
        <v-subheader>what's happening</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>最新warble</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      offset: true,
      word: null,
    }
  },
}
</script>
