<template>
  <div class="Post">
    <div class="flex1">
      <img id="profilePic" :src="pfp" >
      <h4 id="date">{{date}}</h4>
    </div>
    <h4 id="nimi">{{name}}</h4>
    <img id="pilt" :src="image" >
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


.Post{
  flex-direction: column;
  display:flex;
  background-color:gray;
  width: 35vw;
  margin-right:32.5%;
  margin-left:32.5%;
  border-radius: 5px;
}
.flex1{
  display: flex;
}

#profilePic{
  max-width:30px;
  max-height:30px;
  text-align: left;
  flex:1;
}
#nimi {
  text-align:left;
  flex:1;
}
#date{
  text-align: right;
  flex:1;
}
#pilt{
  height:15vw;
  width:15vw;
  flex:1;
  text-align: left;
}
#tekst{
  flex:1;
  text-align: left;
}
#laigid{
  flex:1;
  text-align: right;
  margin:1vw;
}

button{
  min-width:40px;
  width: 5vw;
  flex:1;
  border-radius: 5px;
}
button:hover{
  background-color:darkgray;
}
</style>
