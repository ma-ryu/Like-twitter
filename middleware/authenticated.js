import { firebase, db } from '~/plugins/firebase'

export default function ({ route, store, redirect }) {
  // ユーザーが認証されていないとき
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('setUser', user)
      db.collection('profiles').doc(user.uid).set({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
    } else if (route.path !== '/login') redirect('/login')
  })
}
