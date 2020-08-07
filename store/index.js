import { db, storage } from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  user: null,
})

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
}

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  },
  async addMyFavorite(context, payload) {
    const contents = payload
    const favoriteRef = db
      .collection('profiles')
      .doc(this.state.user.uid)
      .collection('favorite')
      .doc(contents.id)
    if (favoriteRef.id !== contents.id) {
      return false
    } else await favoriteRef.set(contents)
  },
  async changeMyIntro(context, payload) {
    console.log(this.state.user.uid)
    const contents = payload
    await db
      .collection('profiles')
      .doc(this.state.user.uid)
      .update({ myIntro: contents })
  },
  async addPost(context, payload) {
    const contents = payload
    const loadImage = await context.dispatch('uploadImage', {
      file: contents.image.file,
      name: contents.image.name,
    })
    contents.image = loadImage

    const postsRef = db
      .collection('posts')
      .doc('6jdKyY5AvuUy2SsRPPzX')
      .collection('post')
    await postsRef.add(contents)
  },
  uploadImage(context, payload) {
    if (!payload.file) {
      return {
        name: null,
        src: null,
      }
    }
    return new Promise((resolve, reject) => {
      storage
        .child(`images/${payload.name}`)
        .put(payload.file)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            resolve({ name: payload.name, src: url })
          })
        })
        .catch((err) => {
          console.log('画像投稿エラー', err)
        })
    })
  },
}
