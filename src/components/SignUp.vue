<template>
    <div id ="background">
    <b-card id="form" bg-variant="light">
        <br><b><p> Register </p></b><br>
        <b-form @submit="validation(); onSubmit()" v-if="show">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1" label-cols-sm="3">
            <b-form-input id="input-1" v-model="form.name" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email address:" label-for="input-2" label-cols-sm="3"
            description="Please enter a valid email address.">
            
            <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Telegram:" label-for="input-3" label-cols-sm="3">
            <b-form-input id="input-3" v-model="form.tele" placeholder="Enter Telegram username" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Height:" label-for="input-4" label-cols-sm="3">
            <b-form-input id="input-4" v-model="form.height" placeholder="Enter height (in m)" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Weight:" label-for="input-5" label-cols-sm="3">
            <b-form-input id="input-5" v-model="form.weight" placeholder="Enter weight (in kg)" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Your Age:" label-for="input-6" label-cols-sm="3">
            <b-form-input id="input-6" v-model="form.age" placeholder="Enter age" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Your desired calories burnt (per month) target :" label-for="input-7" label-cols-sm="3">
            <b-form-input id="input-7" v-model="form.goal" placeholder="Enter a value" required></b-form-input>
        </b-form-group>

        <b-form  @submit.stop.prevent>
            <label for="password" label-cols-sm="3">Password:</label>
            <b-form-input v-model="form.password" :state="valid" id="password"></b-form-input>
            <b-form-invalid-feedback :state="valid">
                Your password should contain at least 8 characters.
                <br>Must have at least 1 upper-case letter & 1 lower-case letter.
                <br>Must contain at least 1 number.
                <br>Must contain a special character.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="valid">
                Looks Good.
            </b-form-valid-feedback>
        </b-form>

        <br><b-button type="submit" variant="warning" size=lg v-on:click="validation()">SIGN UP</b-button>
        <p>Already have an account? Log in <router-link to="/login" id="login-link"><b>here</b></router-link>.</p>
    </b-form>
    </b-card>
  </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
                tele:'',
                height: '',
                weight: '',
                age: '',
                password: '',
                goal: '',
            },
            show: true,
            valid: false,
            numberFlag: false,
            lowerCaseFlag: false,
            capitalFlag: false,
        }
    },
    methods: {
        validation() {
            for(let i=0; i < this.form.password.length(); i++) {
                var ch = this.form.password.charAt(i);
                if(ch.isDigit()) {
                    this.numberFlag = true;
                }
                else if (ch.isUpperCase()) {
                    this.capitalFlag = true;
                } else if (ch.isLowerCase()) {
                    this.lowerCaseFlag = true;
                }
            }
            if(this.form.password.length >= 8 && this.numberFlag && this.lowerCaseFlag && this.capitalFlag) {
                this.valid = true;
            }
        },
        onSubmit(event) {
            event.preventDefault()
            database.collection('user').add({
                'name': this.form.name,
                'email': this.form.email,
                'tele': this.form.tele,
                'height': this.form.height,
                'weight': this.form.weight,
                'age': this.form.age,
                'password': this.form.password,
                'goal': this.form.goal,
            })

            alert("You have successfully created an account!")
        }
    }
}
</script>

<style scoped>
#background {
    background-image: url('https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/home/hotel/amenities/banyan-tree-fitness-club/banyan-tree-fitness-club-1000x577.jpg');
    opacity: 0.9;
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

</style>