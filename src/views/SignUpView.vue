<template>
  <div class="signup">
    <form>
      <input type="text" id="email" name="email" placeholder="Your email.." required>
      <br>
      <input type="text" id="password" name="Password" placeholder="Your password.." required>
      <br>
      <input type="submit" value="Sign up" >
    </form>
  </div>
</template>

<script>

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