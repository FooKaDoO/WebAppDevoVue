<template>
  <div v-for="item in items">
    <post :msg="item.title" :picture = "item.icon" UID="fuck"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

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
