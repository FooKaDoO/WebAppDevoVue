<template>
  <div class="Post">
    <img id="profilePic" :src="pfp" >
    <h4 id="nimi">{{name}}</h4>
    <h4 id="kuup">{{date}}</h4>
    <br>
    <img id="pilt" :src="image" >
    <br>
    <p id="tekst">{{message}}</p>
    <p id="laigid">{{likes}}</p>
    <button v-on:click="like">Like</button>
  </div>
</template>

<script>
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
#profilePic{
  text-align: left;
  height:5vw;
  width:5vw;
}
#kuup{
  text-align: right;

}
#pilt{
  display:inline;
}
#tekst{
  text-align: left;
}
</style>
