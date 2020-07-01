import { firebase } from '~/plugins/firebase'

export default function ({ route, store, redirect }) {
  // ユーザーが認証されていないとき
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('setUser', user)
    } else if (route.path !== '/login') redirect('/login')
  })
}
