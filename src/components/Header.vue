<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="light-transparent"
      fixed="top"
    >
      <b-navbar-brand href="#">iFIT</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="overview" v-if="isLogged"> OVERVIEW </b-nav-item>
          <b-nav-item to="leaderboard" v-if="isLogged"> MEMBERS </b-nav-item>
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
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogged: false,
    };
  },
};
</script>

<style scoped>
</style>