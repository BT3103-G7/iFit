<template>
<div>
    <div id="background"></div>
    <br><br>
    <div style='width:50%; height:100%; float:left'>
        <b-button variant="info" class="button" to="inputActivity">Input your activity!</b-button> <br><br>
        <img src="../assets/activity.jpg" class="rounded" width="350px">
    </div>
    <div style='width:50%; height:100%; float:left'>
        <b-button variant="info" class="button" to="inputClass">Input your class!</b-button> <br><br>
        <img src="../assets/class.jpg" class="rounded" width="350px">
    </div>
</div>
</template>


<script>
</script>

<style scoped>
#background {
    position: absolute;
    background: url(../assets/inputactivity_background.png);
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
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

</style>