<template>
  <!-- TODO ユーザーprofileのデーターベース登録 -->
  <!-- TODO ユーザーポストのレンダリング -->
  <!-- TODO 投稿に画像があるものだけ表示するタブを作成 -->
  <!-- TODO いいね機能 -->
  <!-- TODO フォロー機能 -->
  <div>
    <v-row>
      <v-toolbar class="px-5">
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>@{{ user.displayName }}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>
    <v-card class="pa-5">
      <div>
        <v-img src="http://via.placeholder.com/350x150"></v-img>
        <v-avatar size="96" class="position">
          <v-img :src="user.photoURL"></v-img>
        </v-avatar>
      </div>
      <v-row justify="space-between" class="pa-5">
        {{ user.displayName }}
        <v-btn outlined @click="dialog = !dialog">EDIT PROFILE</v-btn>
      </v-row>
      <v-dialog v-model="dialog" max-width="600px">
        <v-card color="blue-grey darken-4">
          <v-card-title>
            <span class="headline">EDIT PROFILE</span>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="profile" outlined></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card-text v-model="profile">{{ profile }}</v-card-text>
      <v-tabs v-model="tab" background-color="transparent" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="timeline">
        <v-tab-item v-for="item in items" :key="item"></v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['WARBLES', 'MEDIA'],
      dialog: false,
      profile:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quaeexercitationem suscipit! Illum delectus iure accusantium vel remdoloremenim.',
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style>
.position {
  z-index: 99;
  margin-top: -50px;
  margin-left: 20px;
}
</style>
