<template>
    <div>
    <!--<b-card id="loginDiv" bg-variant="light">
      <h1>Login</h1>
      <b-form v-on:submit.native.prevent="login">

        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input id="input-1" v-model="email" type="email" placeholder="Enter your email" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-input>
        </b-form-group>
        <label for="text-password">Password:</label>
        <b-form-input type="password" id="text-password" v-model="password" required></b-form-input>

        <br><b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember my preference</b-form-checkbox>
        <br><b-button type="submit" variant="warning"><b>LOG IN</b></b-button>
      </b-form>
    </b-card>-->
      <form @submit.prevent="login">     
        <h2>Login</h2>     
        <input       
          type="email"       
          placeholder="Email address..."       
          v-model="email"     
        />     
        <input       
          type="password"       
          placeholder="password..."       
          v-model="password"     
        />     
        <button type="submit">
        Login
        </button>  
      </form>
    </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
        email: "",
        password: "",
      //show: true,
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/overview');
      })
      .catch(error => {
        alert(error.message);
      });
    },
  }
};
</script>

<style scoped>
#loginDiv {
  margin-top: 100px;
  width: 60%;
  height: 80%;
  margin: auto;
  border: 3px solid rgb(95, 93, 93);
  border-radius: 20px;
  background-color: rgb(207, 203, 203);
}
</style>