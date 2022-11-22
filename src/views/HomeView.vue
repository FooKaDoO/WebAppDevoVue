<template>
  <ul v-for="post in posts">
    <Post v-bind="post" :key="PID"/>
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
      ref(0).value++
      //this.$forceUpdate()
    }
  }
}
</script>
