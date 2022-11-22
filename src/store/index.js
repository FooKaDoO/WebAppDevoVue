import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {PID: 0, UID: 1, message: "Noku", image: "/assets/postImages/logo.png", likes: 5},
      {PID: 1, UID: 1, message: "Noku", image: "/assets/postImages/logo.png", likes: 5},
      {PID: 2, UID: 1, message: "Noku", image: "/assets/postImages/logo.png", likes: 5}
    ],
    users: new Map([
      [0, {UID: 0, userName: "Jeekvim", pfp:"/assets/userImages/logo.png"}],
      [1, {UID: 1, userName: "Hasbullah", pfp:"/assets/userImages/logo.png"}],
      [2, {UID: 2, userName: "Post Malone", pfp:"/assets/userImages/logo.png"}]
    ])
  },
  getters: {
    getPosts: state => {
      var getPosts = state.posts.map(post => {
          return {
          name: state.users.get(post.UID).userName,
          pfp: state.users.get(post.UID).pfp,
          message: post.message,
          image: post.image,
          likes: post.likes
        }
      });
      return getPosts
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
