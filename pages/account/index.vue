<template>
  <!-- TODO ユーザーprofileのデーターベース登録 -->
  <!-- TODO ユーザーポストのレンダリング -->
  <!-- TODO 投稿に画像があるものだけ表示するタブを作成 -->
  <!-- TODO いいね機能 -->
  <!-- TODO フォロー機能 -->
  <div>
    <v-row>
      <v-toolbar class="px-5">
        <v-btn icon to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>{{ displayName }}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>
    <v-card class="pa-5">
      <div>
        <v-img src="https://picsum.photos/400/200"></v-img>
        <v-row justify="space-between" class="my-3">
          <v-avatar size="96" class="position">
            <v-img :src="user.photoURL"></v-img>
          </v-avatar>
          <!-- <v-btn
            rounded
            class="mr-5"
            :color="isFollow ? 'primary' : 'default'"
            @click="followUser"
          >
            {{ follow }}
          </v-btn> -->
          <v-btn outlined small class="mr-5" @click="dialog = !dialog">
            EDIT PROFILE
          </v-btn>
        </v-row>
      </div>

      <v-row justify="space-between" class="pa-5">
        {{ displayName }}
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
      <v-card-text v-model="profile" class="pa-2">{{ profile }}</v-card-text>
      <v-card-actions>
        <v-btn text x-small class="text-capitalize">
          {{ following }} <span class="grey--text ml-1">Following</span>
        </v-btn>
        <v-btn text x-small class="text-capitalize">
          {{ follower }} <span class="grey--text ml-1">Followers</span>
        </v-btn>
      </v-card-actions>
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
      isFollow: false,
      follow: 'Follow',
      following: 1000,
      follower: 1200,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    displayName() {
      return `@${this.user.displayName}`
    },
  },
  methods: {
    followUser() {
      this.isFollow = !this.isFollow
      if (this.isFollow) {
        this.follow = 'Following'
      } else {
        this.follow = 'Follow'
      }
    },
  },
}
</script>

<style>
.position {
  z-index: 99;
  margin-top: -60px;
  margin-left: 20px;
}
</style>
