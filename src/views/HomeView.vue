<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Post msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    Post
  }
}
</script>
