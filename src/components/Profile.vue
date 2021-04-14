<template>
    <div id="placeholder">
        <div id="bg"></div>
        <div id="left">
            <div id="profileCard">
                <b-avatar rounded="sm" size="22vh"></b-avatar>
                <p id="name">{{ this.userInfo.name.toUpperCase() }}</p>
                <b-button v-if="!this.editMode" variant="info" class="button" v-on:click="editClick()">Edit</b-button>
                <b-button v-if="this.editMode" variant="info" class="button" v-on:click="applyClick()">Apply</b-button>
            </div>
        </div>
        <div id="right">
            <div v-if="this.editMode" class="accCard">
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Email</label>
                    <b-form-input
                        id="input-email"
                        class="input"
                        :placeholder = "userInfo.email"
                        disabled=true
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Password</label>
                    <b-form-input
                        id="input-password"
                        class="input"
                        placeholder="********"
                        disabled=true
                    ></b-form-input>
                </b-form>    
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Telegram</label>
                    <b-form-input
                        id="input-telegram"
                        class="input"
                        placeholder=""
                        v-model.lazy="updatedInfo.tele"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Age</label>
                    <b-form-input
                        id="input-age"
                        class="input"
                        placeholder=""
                        v-model.lazy="updatedInfo.age"
                        type=number
                        min=1
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Height</label>
                    <b-form-input
                        id="input-height"
                        class="input"
                        placeholder=""
                        v-model.lazy="updatedInfo.height"
                        type=number
                        min=1
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Weight</label>
                    <b-form-input
                        id="input-weight"
                        class="input"
                        placeholder=""
                        v-model.lazy="updatedInfo.weight"
                        type=number
                        min=1
                    ></b-form-input>
                </b-form>
            </div>
            <div v-if="!this.editMode" class="accCard">
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Email</label>
                    <b-form-input
                        id="input-email"
                        class="input"
                        :placeholder = "userInfo.email"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Password</label>
                    <b-form-input
                        id="input-password"
                        class="input"
                        placeholder="********"
                        disabled="true"
                    ></b-form-input>
                </b-form>    
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Telegram</label>
                    <b-form-input
                        id="input-telegram"
                        class="input"
                        :placeholder= "userInfo.tele"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Age</label>
                    <b-form-input
                        id="input-age"
                        class="input"
                        :placeholder= "userInfo.age"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Height</label>
                    <b-form-input
                        id="input-height"
                        class="input"
                        :placeholder= "[[userInfo.height]] + 'cm'"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Weight</label>
                    <b-form-input
                        id="input-weight"
                        class="input"
                        :placeholder= "[[userInfo.weight]] + 'kg'"
                        disabled="true"
                    ></b-form-input>
                </b-form>
            </div>
            <div class="notifCard" v-if="this.editMode">
                <p id="notifHeader">Customize Your Notifications</p>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">New Gym Promotions</label>
                    <b-form-checkbox switch class="switch" v-model="updatedInfo.showPromo"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Fitness Milestones</label>
                    <b-form-checkbox switch class="switch" v-model="updatedInfo.showMilestones"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Class Availability</label>
                    <b-form-checkbox switch class="switch" v-model="updatedInfo.showClassAvail"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Show Telegram Handle</label>
                    <b-form-checkbox switch class="switch" v-model="updatedInfo.showTele"></b-form-checkbox>
                </b-form>
            </div>
            <div class="notifCard" v-if="!this.editMode">
                <p id="notifHeader">Customize Your Notifications</p>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">New Gym Promotions</label>
                    <b-form-checkbox switch class="switch" disabled="true" v-model="userInfo.showPromo"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Fitness Milestones</label>
                    <b-form-checkbox switch class="switch" disabled="true" v-model="userInfo.showMilestones"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Class Availability</label>
                    <b-form-checkbox switch class="switch" disabled="true" v-model="userInfo.showClassAvail"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Show Telegram Handle</label>
                    <b-form-checkbox switch class="switch" disabled="true" v-model="userInfo.showTele"></b-form-checkbox>
                </b-form>
            </div>
            
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import firebase from 'firebase';
import database from '../firebase.js';
import Footer from './Footer.vue'

export default {
    components: {
        Footer
    },
    data() {
      return {
          email: {type: String},
          id: {type: String},
          userInfo: {},
          updatedInfo: {},
          notifSettings: [true, false, true, false],
          editMode: false
        }
    },
    methods: {
        editClick: function() {
            this.editMode = true;
        },
        applyClick: function() {
            this.editMode = false;
            for (let key in this.updatedInfo) {
                if (this.updatedInfo[key] == "") {
                    delete this.updatedInfo[key];
                }
            }
            if(Object.keys(this.updatedInfo).lenth != 0) {
                database.collection("user").doc(this.id).update(this.updatedInfo).then(() => {
                    console.log("Document successfully updated");
                    this.$router.go();
                });
            } 
        }, 
        fetchUserEmail: function() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User logged in already or has just logged in.
                    console.log(user.uid);
                    this.email = user.email;
                    console.log("email: " + this.email);
                } else {
                    // User not logged in or has just logged out.
                }
            });
        },
        fetchUserInfo: function() {
            database.collection("user").get().then((querySnapShot) => {
                querySnapShot.forEach((doc) => {
                    if(doc.data().email != null && doc.data().email.toString().toLowerCase() == this.email.toLowerCase()) {
                        this.id = doc.id;
                        console.log("id: " + this.id);
                    }
                });
            });
            // Cant reference id
            var docRef = database.collection("user").doc("QAOCTRdRlNcexhZNim7vmxMhCzL2");
            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.userInfo = doc.data();
                    this.updatedInfo = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    },
    created() {
        this.fetchUserEmail();
        this.fetchUserInfo();
    },
    watch: {
        updatedInfo: function() {
            console.log(this.updatedInfo);
        }
    }
}
</script>

<style scoped>
#body {
    font-family: 'Lucida Sans';
}
#placeholder {
    height: 100%;
    width: 100%;
}
#bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 1;
  z-index: -1;
}
#left {
    min-height: 90vh;
    width: 40%;
    float: left;
    padding: 4% 0 0 0;
}
#right {
    min-height: 90vh;
    width: 60%;
    float: right;
    padding: 4% 0 0 0;
}
#profileCard {
    background-color: white;
    height: 60vh;
    width: 60%;
    position: relative;
    left: 38%;
    padding: 15% 0 10% 0;
    border-radius: 10px;
}
#name {
    margin-top: 2%;
    font-weight: bolder;
}
#memDetails {
    font-weight: bolder;
}
.accCard {
    background-color: white;
    height: 35vh;
    width: 70%;
    border-radius: 10px;
    position: relative;
    left: 2%;
    padding: 2% 1% 2% 1%;
}
.notifCard {
    margin-top: 3vh;
    background-color: white;
    height: 22vh;
    width: 70%;
    border-radius: 10px;
    position: relative;
    left: 2%;
    padding: 1%;
}
.label {
    margin: 1% auto 1% 15%;
}
.input {
    height: 4%;
    margin-right: 25%;
}
.labelNotif {
    margin: 0 auto 0 20%;
}
.switch {
    margin-left: auto;
    margin-right: 20%;
}
#notifHeader {
    color: #8B0000;
    font-weight: bolder;
    font-size: 18px;
}
Footer {
  position: absolute;
  top: 100%;
  width: 100%;
}
</style>