<template>
  <!-- TODO ユーザーprofileのデーターベース登録 -->
  <!-- TODO いいね機能 -->
  <!-- TODO フォロー機能 -->
  <div>
    <v-toolbar class="px-5">
      <v-btn icon to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>{{ displayName }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card class="pa-5">
      <div>
        <v-img src="https://picsum.photos/400/200"></v-img>
        <v-row justify="space-between" class="my-3">
          <v-avatar size="96" class="position">
            <v-img :src="user.photoURL"></v-img>
          </v-avatar>
          <v-btn
            rounded
            class="mr-5"
            :color="isFollow ? 'primary' : 'default'"
            @click="followUser"
          >
            {{ follow }}
          </v-btn>
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
            <v-textarea v-model="profile.myIntro" outlined></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="changeMyIntro">
              save
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card-text v-if="profile.myIntro" class="pa-2">
        {{ profile.myIntro }}
      </v-card-text>
      <v-card-text v-else class="pa-2">{{ example }}</v-card-text>
      <v-card-actions>
        <v-btn text x-small class="text-capitalize">
          {{ following }} <span class="grey--text ml-1">Following</span>
        </v-btn>
        <v-btn text x-small class="text-capitalize">
          {{ follower }} <span class="grey--text ml-1">Followers</span>
        </v-btn>
        <v-btn text x-small class="text-capitalize">
          {{ favorite }} <span class="grey--text ml-1">Favorite</span>
        </v-btn>
      </v-card-actions>
      <myTimeline :posts="myPosts" />
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
import myTimeline from '~/components/myTimeline.vue'
export default {
  components: { myTimeline },
  data() {
    return {
      myPosts: [],
      dialog: false,
      example: '自己紹介を記載してください',
      profile: '',
      isFollow: false,
      follow: 'Follow',
      following: 1000,
      follower: 1200,
      favorite: 0,
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
  mounted() {
    db.collection('posts')
      .doc('6jdKyY5AvuUy2SsRPPzX')
      .collection('post')
      .where('user.id', '==', this.user.uid)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc
          if (change.type === 'added') {
            this.myPosts.unshift({ id: doc.id, ...doc.data() })
          }
          if (change.type === 'removed') {
            this.myPosts.splice(doc.id, 1)
          }
        })
        // eslint-disable-next-line no-console
        console.log(this.myPosts)
      })
    const profileRef = db.collection('profiles').doc(this.user.uid)
    profileRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No such document!')
        } else {
          console.log('Document data:', doc.data())
          this.profile = doc.data()
        }
      })
      .catch((err) => {
        console.log('Error getting document', err)
      })
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
    async changeMyIntro() {
      const contents = this.profile.myIntro
      await this.$store.dispatch('changeMyIntro', contents)
      this.dialog = false
      console.log('finish')
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
