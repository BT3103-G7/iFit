<template>
<div>
    <div id="content-wrap">
        <div id="bg"></div>
        <div id="overlay"></div>
        <div id="text-placeholder">
            <p id="tagline">COMMIT TO BE FIT</p>
            <p id="msg">iFIT is a one-stop fitness management application. It aims to motivate customers of XYZ gym to track their fitness levels and sign up for gym visits.</p>
        </div>

        <div id="button-placeholder">
            <router-link to="/signup"><b-button id="sign-up-button" variant="warning"><b>JOIN US</b></b-button></router-link>
        </div>

        <div id="login-placeholder">
            <h5 id="login-msg">Already have an account? Log in <router-link to="/login" id="login-link">here</router-link>.</h5>
        </div>
    </div>
</div>
</template>
    
<script>

export default {
    components: {
    }
}
</script>

<style scoped>
    #bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        background: url(../assets/training-pic.jpg);
        opacity: 1;
        z-index: -1;
    }
    #overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.25;
        z-index: 0;
    }
    #text-placeholder {
        top: 35%;
        width: 100%;
        position: absolute;
        z-index: 1;
        text-align: center;
    }
    #tagline {
        font-size: 50px;
        color: white;
        font-family: 'Lucida Sans';
        font-weight: bolder;
    }
    #msg {
        color: white;
        width: 50%;
        left: 25%;
        position: absolute;
        font-size: 18px;
    }
    #button-placeholder {
        top: 55%;
        position: absolute;
        z-index: 1;
        text-align: center;
        width: 100%;
    }
    #sign-up-button {
        margin: auto;
        width: 150px;
        font-family: sans-serif;
        font-size: 18px;
        font-weight: bold;
    }
    #login-placeholder {
        top: 63%;
        position: absolute;
        z-index: 1;
        text-align: center;
        width: 100%;
    }
    #login-msg {
        font-size: 18px;
        color: white;
    }
    #login-link {
        color: gold;
    }
    #login-link:hover {
        text-decoration: none;
    }
    #content-wrap {
        padding-bottom: 150px;
    }
</style>
