<template>
  <!-- TODO ナビゲーションにwarble検索を追加 -->
  <v-bottom-navigation dark shift fixed>
    <v-btn to="/">
      <span>HOME</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/account">
      <span>ACCOUNT</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/search">
      <span>SEARCH</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {}
</script>
