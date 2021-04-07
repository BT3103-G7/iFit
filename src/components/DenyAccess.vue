<template>
  <div id="myimg">
    <div id="mytext">
    <h3>You must be signed in to access all iFit features.</h3>
    <b-button
      variant="warning"
      class="btn btn-primary mr-3 float-left"
      to="/login"
      >Log In</b-button
    >
    <b-button variant="warning" class="btn btn-primary float-left" to="/signup"
      >Sign Up</b-button
    >
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
#myimg {
  display: block;
  width: 100%;
  position: absolute;
  background-image: url("../assets/deniedbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  top: 0;
}
#mytext {
  margin-left: 2em;
}
h3 {
  color: white;
  text-align: left;
  margin-top: 10%;
}
</style>