<template>
  <ul v-for="post in posts">
    <Post v-bind="post" :key="post.PID"/>
  </ul>
  <form v-action="resetLikes"><input type="button" value="reset likes"></form>
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
      this.$store.mutations.commit('resetLikes')
      this.$vnode.key += 1
      this.$vnode.key -= 1
      //this.$forceUpdate()
    }
  }
}
</script>
