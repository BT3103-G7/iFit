<!--<template>
    <div id ="background">
    <b-card id="form" bg-variant="light">
        <br><b><p> Register </p></b><br>
    <b-form @submit.prevent="register">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1" label-cols-sm="3">
            <b-form-input id="input-1" v-model="name" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email address:" label-for="input-2" label-cols-sm="3"
            description="Please enter a valid email address."> 
            <b-form-input id="input-2" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Telegram:" label-for="input-3" label-cols-sm="3">
            <b-form-input id="input-3" v-model="tele" placeholder="Enter Telegram username" required></b-form-input>
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

        <b-form-group id="input-group-7" label="Your desired calories burnt (per month) target:" label-for="input-7" label-cols-sm="3">
            <b-form-input id="input-7" v-model="goal" placeholder="Enter a value" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Password:" label-for="input-8" label-cols-sm="3">
            <b-form-input id="input-8" type="password" v-model="password" placeholder="Enter a password" required></b-form-input>
        </b-form-group>

        <br><b-button type="submit" variant="warning" size=lg><b>SIGN UP</b></b-button>
        <p>Already have an account? Log in <router-link to="/login" id="login-link"><b>here</b></router-link>.</p>
    </b-form>
    </b-card>
  </div>
</template>-->

<template>
    <div>
        <form @submit.prevent="register">
            <h2>Register</h2>
            <input
            type="email"
            placeholder="Email address..."
            v-model="email"
            />
            <input
            type="password"
            placeholder="password..."
            v-model="password"
            />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

/*<b-form  @submit.stop.prevent>
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
        </b-form>*/
export default {
    data() {
        return {
            email: '',
            //name: '',
            //tele:'',
            //height: '',
            //weight: '',
            //age: '',
            password: '',
            //goal: '',

            show: true,
            valid: false,
            numberFlag: false,
            lowerCaseFlag: false,
            capitalFlag: false,
        }
    },
    methods: {
        /*validation() {
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
        },*/
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
            /*database.collection('user').add({
                'name': this.name,
                'email': this.email,
                'tele': this.tele,
                'height': this.height,
                'weight': this.weight,
                'age': this.age,
                'password': this.password,
                'goal': this.goal,
            })*/
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