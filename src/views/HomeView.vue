<template>
  <ul v-for="post in posts">
    <Post v-bind="post" />
    <form><input type="button" value="reset likes"></form>
  </ul>
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
  }
}
</script>
