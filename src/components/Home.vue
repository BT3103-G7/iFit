<template>
<div>
    <div id="bg"></div>
    <div id="overlay"></div>
    <div id="content-wrap">
        <div id="text-placeholder">
            <p id="tagline">COMMIT TO BE FIT</p>
            <p id="msg">iFIT is a one-stop fitness management application. It aims to motivate customers of iFit gym to track their fitness levels and sign up for gym visits.</p>
        </div>

        <div id="button-placeholder">
            <router-link to="/signup"><b-button id="sign-up-button" variant="warning" v-if="!user"><b>JOIN US</b></b-button></router-link>
        </div>

        <div id="login-placeholder">
            <h5 id="login-msg" v-if="!user">Already have an account? Log in <router-link to="/login" id="login-link">here</router-link>.</h5>
        </div>
        <div>
            <p id="welcomeMsg" v-if="user">Welcome Back !</p>
        </div>
    </div>
</div>
</template>
    
<script>
import firebase from 'firebase'
export default {
    components: {
    },
    data() {
        return {
            user: false
        }
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
}

</script>

<style scoped>
    #bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        background: url(/static/training-pic.jpg);
        opacity: 1;
        z-index: -1;
    }
    #overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        background-color: black;
        opacity: 0.25;
        z-index: 0;
    }
    #text-placeholder {
        top: 35%;
        width: 100%;
        z-index: 1;
        text-align: center;
        position: relative;
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
        position: relative;
        font-size: 18px;
        font-family: 'Rubik', sans-serif;
    }
    #button-placeholder {
        top: 55%;
        z-index: 1;
        text-align: center;
        width: 100%;
        position: relative;
    }
    #sign-up-button {
        margin: 1% 0 1% 0;
        width: 140px;
        font-family: 'Fjalla One', sans-serif;
        font-size: 22px;
        font-weight: bold;
    }
    #login-placeholder {
        top: 63%;
        z-index: 1;
        text-align: center;
        width: 100%;
        position: relative;
    }
    #login-msg {
        font-size: 18px;
        color: white;
        font-family: 'Rubik', sans-serif;
    }
    #login-link {
        color: gold;
    }
    #login-link:hover {
        text-decoration: none;
    }
    #content-wrap {
        background-color: transparent;
        position: relative;
        margin-top: 18%;
    }
    #welcomeMsg {
        color: rgb(255, 208, 0);
        font-size: 30px;
        font-weight: bold;
        font-family: 'Fjalla One', sans-serif;
    }
</style>
