<template>
  <div class="sidebar-user ma-3">
    <v-list rounded class="mb-3">
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="mb-3"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content v-if="$vuetify.breakpoint.lg">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-btn rounded width="100%" class="pa-5 mb-5">Tweet</v-btn>
      <v-btn
        v-if="!isAuthenticated"
        rounded
        width="100%"
        class="pa-5 mb-5"
        @click="login"
      >
        <v-icon small class="mr-5">mdi-google</v-icon>Login
      </v-btn>
    </v-list>
    <v-menu v-if="isAuthenticated" :offset-y="offset" top class="pb-10">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          bottom
          rounded
          width="100%"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
          {{ user.displayName }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <!-- TODO ユーザー画面を作成する。 -->
          <v-list-item-title>
            <v-icon>mdi-account</v-icon>
            {{ user.displayName }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Add existing acount</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-btn
            v-if="$store.getters.isAuthenticated"
            rounded
            width="100%"
            class="pa-5 mb-5"
            @click="logout"
            >Logout</v-btn
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { firebase } from '~/plugins/firebase'

export default {
  data() {
    return {
      fixed: false,
      offset: true,
      items: [
        { text: 'HOME', icon: 'mdi-home', to: '/' },
        { text: 'Profile', icon: 'mdi-account', to: '/account' },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          this.setUser(user)
          console.log(this.$store.state.user)
          this.$router.push('/')
        })
        .catch((error) => {
          window.alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
          window.alert('ログアウトに成功！')
          this.$router.push('/login')
        })
        .catch((e) => {
          window.alert('ログアウトに失敗しました')
          console.log(e)
        })
    },
  },
}
</script>

<style>
.sidebar-user {
  position: fixed;
  width: 15%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
