<template>
<div>
    <div id="content-wrap">
        <div id="overlay"></div>
        <div id="text-placeholder">
            <p id="tagline">COMMIT TO BE FIT</p>
            <p id="msg">iFIT is a one-stop fitness management application. It aims to motivate customers of XYZ gym to track their fitness levels and sign up for gym visits.</p>
        </div>

        <div id="button-placeholder">
            <router-link to="/signup"><b-button id="sign-up-button" variant="warning">SIGN UP</b-button></router-link>
        </div>

        <div id="login-placeholder">
            <h5 id="login-msg">Already have an account? Log in <span id="login-link">here</span>.</h5>
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
    body {
        background-image: url("../assets/training-pic.jpg");
        background-attachment: scroll;
        background-repeat: none;
        overflow: auto;
    }
    #overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.4;
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
        cursor: pointer;
    }
    #content-wrap {
        padding-bottom: 150px;
    }
</style>
