<template>
<div>
    <div id="background"></div>
    
    <div id="backbutton-placeholder">  
        <router-link to="/Overview"><img src="/static/back_button.png" height=50px width=50px></router-link>
    </div><br><br><br>
    
    <div style='width:60%; height:100%; float:left'>
        <b-button variant="info" class="button" to="inputActivity">Input your activity!</b-button> <br><br>
        <img src="/static/activity.jpg" class="rounded" width="350px">
    </div>
    <div style='width:25%; height:100%; float:left'>
        <b-button variant="info" class="button" to="inputClass">Input your class!</b-button> <br><br>
        <img src="/static/class.jpg" class="rounded" width="350px">
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
    background: url(/static/inputactivity_background.png);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: -1;
} 
#button1 {
    width: 100%;
    height: 20%;
    padding: 3% 1% 3% 1%;
    margin-left:-20%
}
#button2 {
    width: 100%;
    height: 20%;
    padding: 3% 1% 3% 1%;
    margin-left:20%
}
#backbutton-placeholder {
    top: 13%;
    left: -33%;
    position: absolute;
    z-index: 1;
    text-align: center;
    width: 100%;
}
Footer {
    position: absolute;
    top: 100%;
    width: 100%;
}

.button {
    font-family: 'Rubik', sans-serif;
}
</style>