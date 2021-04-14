<template>
    <div>
        <div id="background"></div>
        <div id="right">
            <h1>ABOUT US</h1>
            <p> iFit strives to provide the highest quality fitness experience to all members. </p><br>
            <p> Use our personalized gym tracker to log more than 600 activities like cycling, 
                walking, gym workouts, cross training, yoga, and many others! Monitor your fitness levels 
                & check out your gains to stay motivated. </p><br>
            <p> Find your nearest gym <router-link to="/locations" class="routerlink">here</router-link>! </p>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>
<style scoped>
#background {
    position: absolute;
    background: url(/static/about.jpg);
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    opacity: 1;
    z-index: -1;
    background-size: cover;
} 
#right {
  float: right;
  width: 40%;
  height: 100%;
  margin-right: 5%;
  margin-top: -3%;
}
h1 {
  text-align: left;
  color: gold;
  padding-left: 0em;
  padding-top: 4em;
  padding-bottom: 1em;
  font-family: 'Fjalla One', sans-serif;
}
p {
    text-align: left;
    color: white; 
    font-size: 18px;
}
.routerlink {
  color: gold;
}
Footer {
  position: absolute;
  top: 120%;
  width: 100%;
}
</style>