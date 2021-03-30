<template>
    <div id ="background">
    <b-card id="form" bg-variant="light">
        <b><h1> Register </h1></b><br>
    <form @submit.prevent="register" oninput='pw2.setCustomValidity(pw2.value != pw1.value ? "Passwords do not match." : "")'>

        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1" label-cols-sm="3">
            <b-form-input id="input-1" v-model="name" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email address:" label-for="input-2" label-cols-sm="3"
            description="Please enter a valid email address."> 
            <b-form-input id="input-2" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Telegram:" label-for="input-3" label-cols-sm="3">
            <b-form-input id="input-3" v-model="tele" placeholder="@username" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Height:" label-for="input-4" label-cols-sm="3">
            <b-form-input id="input-4" v-model="height" placeholder="Enter height (in m)" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Weight:" label-for="input-5" label-cols-sm="3">
            <b-form-input id="input-5" v-model="weight" placeholder="Enter weight (in kg)" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Your Age:" label-for="input-6" label-cols-sm="3">
            <b-form-input id="input-6" v-model="age" placeholder="Enter age" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Your desired calories burnt target:" label-for="input-7" label-cols-sm="3"
            description="Desired calories burnt per month">
            <b-form-input id="input-7" v-model="goal" placeholder="Enter a value" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Password:" label-for="pswd" label-cols-sm="3">
            <b-form-input id="pswd" type="password" name=pw1 v-model="password" state="valid" placeholder="Enter a password" required></b-form-input>
            <b-form-invalid-feedback :state="valid">
                <span :class="has_minimum_length ? 'has_required' : ''">Your password should contain at least 8 characters.</span>
                <br><span :class="has_lowercase ? 'has_required' : ''">Must have at least 1 LOWER-case letter</span>
                <br><span :class="has_uppercase ? 'has_required' : ''">Must have at least 1 UPPER-case letter</span>
                <br><span :class="has_number ? 'has_required' : ''">Must contain at least 1 number.</span>
                <br><span :class="has_special ? 'has_required' : ''">Must contain a special character.</span>
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="valid">
                Looks Good!
            </b-form-valid-feedback>
        </b-form-group>
        
        <b-form-group id="input-group-9" label="Confirm Password:" label-for="pswd2" label-cols-sm="3">
            <b-form-input id="pswd2" type="password" name=pw2 placeholder="Enter your password again" required></b-form-input>
        </b-form-group>

        <br><b-button type="submit" variant="warning" size=lg><b>SIGN UP</b></b-button>
        <p>Already have an account? Log in <router-link to="/login" id="login-link"><b>here</b></router-link>.</p>
    </form>
    </b-card>
  </div>
</template>

<script>
import firebase from 'firebase'
import database from '../firebase'

export default {
    data() {
        return {
            email: '',
            name: '',
            tele:'',
            height: '',
            weight: '',
            age: '',
            password: '',
            goal: '',

            has_minimum_length: false,
            has_number: false,
            has_lowercase: false,
            has_uppercase: false,
            has_special: false,
        }
    },
    watch: {
        password() {
            const format = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/;
            this.has_minimum_length = (this.password.length >= 8);
            this.has_number    = /\d/.test(this.password);
            this.has_lowercase = /[a-z]/.test(this.password);
            this.has_uppercase = /[A-Z]/.test(this.password);
            this.has_special   = format.test(this.password);
        }
    },
    computed:{
        valid(){
            return this.has_minimum_length && this.has_special && this.has_uppercase && this.has_lowercase && this.has_number;
        }
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/login');
                })
                .catch(error => {
                    alert(error.message);
                });
            var joinDate = new Date(); //access date when the user first joins iFit
            database.collection('user').add({
                'name': this.name,
                'email': this.email,
                'tele': this.tele,
                'height': Number(this.height),
                'weight': Number(this.weight),
                'age': Number(this.age),
                'password': this.password,
                'goal': Number(this.goal),
                'startDate': joinDate.getDate(),
                'startMonth': joinDate.getMonth() + 1,
                'startYear': joinDate.getFullYear(),
            })
        }
    }
}
</script>

<style scoped>
#background {
    background-image: url('https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/home/hotel/amenities/banyan-tree-fitness-club/banyan-tree-fitness-club-1000x577.jpg');
}
#form {
    width: 60%;
    height: 70%;
    margin: auto;
    border: 3px solid rgb(95, 93, 93);
    border-radius: 20px;
    background-color: rgb(207, 203, 203);
}
#title {
    font-size: 20rem;
}
label {
    text-align: left;
}
#login-link {
        color: rgb(255, 208, 0);
}
.has_required {
    text-decoration: line-through;
    color:#689868;
}

</style>