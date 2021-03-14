<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="light-transparent" fixed="top">
      <b-navbar-brand href="#">iFIT</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"> OVERVIEW </b-nav-item>
            <b-nav-item href="#"> FIND US </b-nav-item>
            <b-nav-item href="#"> MEMBERS </b-nav-item>
            <b-nav-item href="#"> ABOUT </b-nav-item>
            <b-nav-item href="#"> CONTACT </b-nav-item>
          <b-nav-item-dropdown right v-if="isLogged">
            <!-- Using 'button-content' slot -->
            <template #button-content >
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
            isLogged: false
        }
    }
}
</script>

<style scoped>

</style>