<template>
  <div v-for="PID in store.posts.getPIDs()">
    <post :PID="PID" :image="store.posts.getImage(PID)" />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import store from '@/store/index.js'

export default {
  name: 'HomeView',
  components: {
    Post
  },
  data: () => ({
    items: [
        { title: 'Chat', icon: require('@/assets/logo.png') },
        { title: 'Vue',  icon: require('@/assets/logo.png') },
        { title: 'Notification', icon: require('@/assets/logo.png') },
      ],
  })
}
</script>
