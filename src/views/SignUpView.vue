<template>
  <div class="signup">
    <p v-if="errors.length">
      <b>Please correct the following errors</b>
      <ul>
        <li v-for="e in errors" v-bind:key="e.id">
          {{e}}
        </li>
      </ul>
    </p>
    <form>
      <input type="text" id="email" name="email" placeholder="Your email.." v-model="name" required>
      <br>
      <input type="text" id="password" name="Password" placeholder="Your password.." v-model="password" required>
      <br>
      <input type="submit" value="Sign up" v-on:click="isValid" >
    </form>
    

  </div>
</template>

<script>
export default{
  name: "isValid",
  data(){
    return{
      errors:[],
      name: null,
      password: null
    }
  },
  methods: {
    isValid(e){
      console.warn("FUNCTION CALLED")
      if(this.password==undefined){
        console.log("Password undefined")
      }
      if(this.password.length>=8 || this.password.length<=15 ){
        this.errors.push("The password's length is not between 8 and 12 characters.")
        console.log("The password's length is not between 8 and 12 characters.")
      } 
      let number= false;
      this.errors.push("The password is required to have a number in it.")
      let specialChar= false;
      let specList="!?,.:;-'#€%&/()={[]}§$£@©"
      this.errors.push("The password is missing a special character.")
      let upperCase= false
      this.errors.push("The password is missing a uppercase character.")
      let underScore= false
      this.errors.push("The password is required to have the '_' symbol.")
      let lowerCase=0
      this.errors.push("The password required to have 2 lowercase characters.")
      for (let i=0; i< this.password.length;i++){
        char=this.password.charAt(i);
        if(!isNaN(char*1)){
          number=true;
          this.errors.remove("The password is required to have a number in it.")
          console.log("The password is required to have a number in it.")
        }
        else if(char==char.toUpperCase()){
          upperCase=true;
          this.errors.remove("The password is missing a uppercase character.")
          console.log("The password is missing a uppercase character.")
        }
        else if(char==char.toLowerCase()){
          lowerCase+=1;
          if(lowerCase>=2){
            this.errors.remove("The password required to have 2 lowercase characters.")
            console.log("The password required to have 2 lowercase characters.")
          }
        }
        else if(char=="_"){
          underScore=true;
          this.errors.remove("The password is required to have the '_' symbol.")
          console.log("The password is required to have the '_' symbol.")
        }
        else if(specList.includes(char)){
          specialChar=true;
          this.errors.remove("The password is missing a special character.")
          console.log("The password is missing a special character.")
        }
      }
      if(len(errors)==0){
        console.log("All checks passed")
      }
      e.preventDefault()
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