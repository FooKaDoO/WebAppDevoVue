import { VueElement } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: new Map([
      [0,{PID: 0, UID: 0, message: "tere", image: "/assets/postImages/logo1.jpg", likes: 5, date:"2021-01-01"}],
      [1,{PID: 1, UID: 1, message: "tere", image: "/assets/postImages/logo2.jpg", likes: 5, date:"2021-01-01"}],
      [2,{PID: 2, UID: 2, message: "tere", image: "/assets/postImages/logo3.jpg", likes: 5, date:"2021-01-01"}],
      [3,{PID: 3, UID: 1, message: "tere", image: "/assets/postImages/logo4.jpg", likes: 5, date:"2021-01-01"}],
      [4,{PID: 4, UID: 1, message: "tere", image: "/assets/postImages/logo5.jpg", likes: 5, date:"2021-01-01"}],
      [5,{PID: 5, UID: 2, message: "tere", image: "/assets/postImages/logo6.jpg", likes: 5, date:"2021-01-01"}],
      [6,{PID: 6, UID: 1, message: "tere", image: "/assets/postImages/logo7.jpg", likes: 5, date:"2021-01-01"}],
      [7,{PID: 7, UID: 0, message: "tere", image: "/assets/postImages/logo8.jpg", likes: 5, date:"2021-01-01"}],
      [8,{PID: 8, UID: 1, message: "tere", image: "/assets/postImages/logo9.jpg", likes: 5, date:"2021-01-01"}],
      [9,{PID: 9, UID: 1, message: "tere", image: "/assets/postImages/logo10.jpg", likes: 5, date:"2021-01-01"}],

    ]),
    users: new Map([
      [0, {UID: 0, userName: "Jeekvim", pfp:"/assets/userImages/pfp1.jpg"}],
      [1, {UID: 1, userName: "Hasbullah", pfp:"/assets/userImages/pfp2.jpg"}],
      [2, {UID: 2, userName: "Post Malone", pfp:"/assets/userImages/pfp3.jpg"}]
    ])
  },
  getters: {
    getPosts: state => {
      var getPosts = []
      state.posts.forEach((post, key) => {
        getPosts.push({
          PID: post.PID,
          UID: post.UID,
          name: state.users.get(post.UID).userName,
          pfp: state.users.get(post.UID).pfp,
          message: post.message,
          image: post.image,
          likes: post.likes,
          date: post.date
        })
      }
      )
      return getPosts
    }
  },
  mutations: {
    like (state, PID) {
      state.posts.get(PID).likes++
    },
    resetLikes (state) {
      state.posts.forEach((post, key) =>{
        post.likes = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
