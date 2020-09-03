<template>
  <v-card>
    <v-card-title class="justify-center text-h4">
      Log in for warble
    </v-card-title>
    <v-img
      height="300px"
      width="300px"
      class="mx-auto"
      :src="require('@/assets/img/warble.png')"
    ></v-img>
    <v-card-actions>
      <v-btn
        v-if="!isAuthenticated"
        rounded
        class="pa-5 mb-5 d-flex mx-auto ma-5"
        @click="login"
      >
        <v-icon small class="mr-5 primary--text">mdi-google</v-icon>Log in
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { firebase } from '~/plugins/firebase'

export default {
  middleware: 'authenticated',
  layout: 'loginPage',
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

<style></style>
