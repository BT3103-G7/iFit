<template>
    <div>
        <div id="background"></div>
        <div id="right">
            <h1>About Us</h1>
            <p> iFit strives to provide the highest quality fitness experience to all members. </p><br>
            <p> Use our personalized gym tracker to log more than 600 activities like cycling, 
                walking, gym workouts, cross training, yoga, and many others! Monitor your fitness levels 
                & check out your gains to stay motivated. </p><br>
            <p> Find your nearest gym <router-link to="/locations" class="routerlink">here</router-link>! </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#background {
    position: absolute;
    background: url(../assets/about.jpg);
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
}
h1 {
  text-align: left;
  color: gold;
  padding-left: 0em;
  padding-top: 4em;
  padding-bottom: 1em;
}
p {
    text-align: left;
    color: white; 
    font-size: 18px;
}
.routerlink {
  color: gold;
}
</style>