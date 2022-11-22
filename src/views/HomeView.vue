<template>
  <ul v-for="post in posts">
    <Post v-bind="post" :key="post.PID"/>
  </ul>
  <button v-on:click="resetLikes">Reset Likes</button>
</template>

<script>
// @ is an alias to /srcs
import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    Post
  },
  data: function() {
    return {}
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  },
  methods: {
    resetLikes: function() {
      this.$store.commit('resetLikes')
    }
  }
}
</script>
