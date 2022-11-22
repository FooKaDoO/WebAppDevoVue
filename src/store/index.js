import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: new Map([
      [0,{PID: 0, UID: 1, message: "Noku", image: "/assets/postImages/logo.png", likes: 5, date:"2021-01-01"}],
      [1,{PID: 1, UID: 1, message: "Noku", image: "/assets/postImages/logo.png", likes: 5, date:"2021-01-01"}],
      [2,{PID: 2, UID: 1, message: "Noku", image: "/assets/postImages/logo.png", likes: 5, date:"2021-01-01"}]
    ]),
    users: new Map([
      [0, {UID: 0, userName: "Jeekvim", pfp:"/assets/userImages/logo.png"}],
      [1, {UID: 1, userName: "Hasbullah", pfp:"/assets/userImages/logo.png"}],
      [2, {UID: 2, userName: "Post Malone", pfp:"/assets/userImages/logo.png"}]
    ])
  },
  getters: {
    getPosts: state => {
      var getPosts = state.posts.values(post => {
          return {
          PID: post.PID,
          UID: post.UID,
          name: state.users.get(post.UID).userName,
          pfp: state.users.get(post.UID).pfp,
          message: post.message,
          image: post.image,
          likes: post.likes,
          date: post.date
        }
      });
      return getPosts
    }
  },
  mutations: {
    like (state, PID) {
      state.posts.get(PID).likes++
    }
  },
  actions: {
  },
  modules: {
  }
})
