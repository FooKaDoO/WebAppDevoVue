<template>
  <div class="Post">
    <img id="pfp" :src="pfp" >
    <h4 id="nimi">{{name}}</h4>
    <h4 id="date">{{date}}</h4>
    <br>
    <img id="image" :src="image" >
    <br>
    <p id="text">{{message}}</p>
    <p id="likes">{{likes}}</p>
    <button v-on:click="like">Like</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Post',
  props: {
    PID: Number,
    UID: Number,
    name: String,
    pfp: String,
    message: String,
    image: String,
    likes: Number,
    date: String
  },
  methods: {
    like : function() {
      this.$store.commit("like",this.PID)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
  display: inline-block;
  width:30vw;
  background-color:gray;
  border-radius:5px;
  margin:1%;
  white-space: nowrap;
}
#nimi{
  text-align: left;
}
#pfp{
  text-align: left;
  height:5vw;
  width:5vw;
}
#date{
  text-align: right;

}
#image{
  display:inline;
}
#text{
  text-align: left;
}
</style>
