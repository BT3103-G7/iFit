<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="light-transparent"
      fixed="top"
    >
      <b-navbar-brand to="/">
       <img src="../assets/iFit-logo.png" width="120" height="70" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="overview" v-if="isLogged"> OVERVIEW </b-nav-item>
          <b-nav-item to="members" v-if="isLogged"> MEMBERS </b-nav-item>
          <b-nav-item to="locations"> LOCATIONS </b-nav-item>
          <b-nav-item to="schedule"> SCHEDULE </b-nav-item>
          <b-nav-item to="about"> ABOUT </b-nav-item>
          <b-nav-item to="contact"> CONTACT </b-nav-item>
          

          <b-nav-item-dropdown right v-if="isLogged">
            <!-- Using 'button-content' slot -->

            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" v-on:click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      // to be updated when user authentication is done
      isLogged: true,
    };
  },
  methods: {
    logout() {
      if (firebase.auth().currentUser) {
        //this.isLogged = !this.isLogged; //hides the necessary components in navbar when user logouts
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
      }
    }
  }
};
</script>

<style scoped>
</style>