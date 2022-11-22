import { createStore } from 'vuex'

const posts = {
  state: () => ({
    PIDs: [0, 1, 2],
    UIDs: [1, 0, 2],
    texts: ["Tervist", "Shashmalone", "Mango"],
    images: ["@/assets/logo.png", "@/assets/logo.png", "@/assets/logo.png"],
    likes: [1, 2, 3]
  }),
  getters: {
    getPIDs() {
      return PIDs
    },
    getUID(PID) {
      return UIDs[PID]
    },
    getText(PID) {
      return texts[PID]
    },
    getImage(PID) {
      return images[PID]
    },
    getLikes(PID) {
      return likes[PID]
    }
  },
  mutations: {
    like (PID) {
      postLikes[PID]++
    },
    unlike (PID) {
      postLikes[PID]--
    },
    resetLikes() {
      for (let i = 0; i < postLikes.length; i++) {
        postLikes[i] = 0
      }
    }
  }
}

const users = {
  state: () => ({
    names: ["Vello", "Jeekvim", "Poro"],
    images: ["logo.png", "logo.png", "logo.png"]
  }),
  getters : {
    getName(UID) {
      return names[UID]
    },
    getImage(UID) {
      return images[UID]
    }
  }
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users: users,
    posts: posts
  }
})
