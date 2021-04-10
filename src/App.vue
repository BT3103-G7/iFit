<template>
  <div id="app">
    <Header v-if="$route.meta.header === 1">></Header>
    <router-view></router-view>
    
  </div>
</template>


<script>
import Header from './components/Header.vue'
//import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    //Footer
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>