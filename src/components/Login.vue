<template>
    <div id="background">
    <b-card id="loginDiv" bg-variant="light">
      <h1><b>Login</b></h1><br>
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
        firebase.auth().onAuthStateChanged(newUser => {
          if (newUser) {
            if (newUser.emailVerified == true) {
              alert('Successfully logged in');
              this.$router.push('/overview');
            }
            else {
              alert('Please make sure you have verified your email address.');
            }
          }
        })
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
  height: 60%;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid rgb(95, 93, 93);
  border-radius: 20px;
  background-color: rgb(207, 203, 203);
}
#background {
  background: url(../assets/login_testbackground.jpg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
p {
  font-size: 85%;
}
h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>