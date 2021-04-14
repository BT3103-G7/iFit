<template>
  <div id='main'>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="light-transparent"
      fixed="top"
      sticky=""
      justified
      class="mynav"
    >
      <b-navbar-brand to="/">
       <img src="/static/iFit-logo.png" width="120" height="70" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="overview"> OVERVIEW </b-nav-item>
          <b-nav-item to="members"> MEMBERS </b-nav-item>
          <b-nav-item to="locations"> LOCATIONS </b-nav-item>
          <b-nav-item to="schedule"> SCHEDULE </b-nav-item>
          <b-nav-item to="about"> ABOUT </b-nav-item>
          <b-nav-item to="contact"> CONTACT </b-nav-item>
          

          <b-nav-item-dropdown right v-if="user">
            <!-- Using 'button-content' slot -->

            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#" to="profile">Profile</b-dropdown-item>
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
      user: null
    };
  },
  methods: {
    logout() {
      if (firebase.auth().currentUser) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
            this.$router.go();
          });
      }
    },
  },
  created: function () {
    var vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vm.user = user;
      } else {
        vm.user = null;
      }
    });
  }
};
</script>

<style scoped>
#main {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 100px;
  
}
.mynav {
  width: 100%;
}
</style>