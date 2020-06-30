import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCxFbEFdbQSurQ1MSST6mDnhjVHBtdgNRw',
    authDomain: 'like-twitter-b88b5.firebaseapp.com',
    databaseURL: 'https://like-twitter-b88b5.firebaseio.com',
    projectId: 'like-twitter-b88b5',
    storageBucket: 'like-twitter-b88b5.appspot.com',
    messagingSenderId: '55603424261',
    appId: '1:55603424261:web:78783b66c1c5d09267806c',
    measurementId: 'G-WP6RE2BY1C',
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export { firebase, db }
