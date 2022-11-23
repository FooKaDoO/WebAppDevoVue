<template>
  <div class="signup">
      <ul>
        <li v-for="e in errors" v-bind:key="e.id">
          {{e}}
        </li>
      </ul>
    <form @submit.prevent="isValid(password)">
      <input type="text" id="email" name="email" placeholder="Your email.." v-model="name" required>
      <br>
      <input type="text" id="password" name="Password" placeholder="Your password.." v-model="password" required>
      <br>
      <input type="submit" value="Sign up" >
    </form>
    

  </div>
</template>

<script>
export default{
  name: "isValid",
  data(){
    return{
      errors:[
        "The password's length has to be between 8 and 12 characters.",
        "The password is required to have a number in it.",
        "The password is required to have a special character.",
        "The password is required to have an uppercase character.",
        "The password is required to have the '_' symbol.",
        "The password required to have 2 lowercase characters."
      ]
    }
  },
  methods: {
    isValid(e){
      console.log(e)
      if (
        /^.{8,12}$/.test(e) &&
        /\d/.test(e) &&
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e) &&
        /[A-Z]/.test(e) &&
        /[_]/.test(e) &&
        /[a-z]{2,}/.test(e)
        ) {
        return false
      }
      return true
    }
  }
}

</script>

<style>
input[type=text], select {
  width:20vw;
  padding: 1vw 1.5vw;
  margin: 0.75vw 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label{
  width:30vw;
  padding:1%;
  text-align: right;
}
label+input{
  width:30vw;
}
input[type=submit] {
  width: 10vw;
  background-color: #4CAF50;
  color: white;
  padding: 1% 1.5%;
  margin: 1% ;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
</style>