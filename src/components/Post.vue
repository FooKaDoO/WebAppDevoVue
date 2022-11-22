<template>
  <div class="Post">
    <img :src="pfp" >
    <h4>{{name}}</h4>
    <h4>{{date}}</h4>
    <p>{{message}}</p>
    <img :src="image" >
    <p>{{likes}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    name: String,
    pfp: String,
    message: String,
    image: String,
    likes: Number,
    date: Date
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
