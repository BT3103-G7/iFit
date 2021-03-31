<template>
    <div id="background">
    <b-card id="loginDiv" bg-variant="light">
      <h1>Login</h1><br>
      <form @submit.prevent="login">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" label-cols-sm="3">
          <b-form-input id="input-1" v-model="email" type="email" placeholder="Enter your email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="text-password" label-cols-sm="3">
          <b-form-input type="password" id="text-password" v-model="password" placeholder="Enter your password" required></b-form-input>
        </b-form-group>
        <br><b-button type="submit" variant="warning"><b>LOG IN</b></b-button>
      </form>
      <br><br><span><b>Forgot your password? </b></span>
      <p><i>*key in your email address above, then click the button below.</i></p>

      <b-button type="button" v-on:click="reset">Reset my password</b-button>
    </b-card>
    </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
        email: "",
        password: "",
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
    
    reset() {
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(this.email).then(() => {
        alert('Password reset link has been sent to your email.');
      // Email sent.
      }).catch(error => {
            alert(error.message);
      // An error happened.
      });
    }
  }
};
</script>

<style scoped>
#loginDiv {
  width: 40%;
  height: 75%;
  margin: auto;
  border: 3px solid rgb(95, 93, 93);
  border-radius: 20px;
  background-color: rgb(207, 203, 203);
}
#background {
  background-image: url('https://www.marinabaysands.com/content/dam/revamp/hotel/banyan-tree-fitness-club/banyan-tree-fitness-club-masthead-m.jpg');
  height: 660px;
}
p {
  font-size: 85%;
}
</style>