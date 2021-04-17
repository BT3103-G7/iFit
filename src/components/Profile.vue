<template>
  <div id="placeholder">
    <div id="bg"></div>
    <div id="left">
      <div id="profileCard">
        <p v-if="!this.editMode" id="name">{{ this.userInfo.name }}</p>
        <b-form-input
            id="input-name"
            class="input"
            :placeholder="this.userInfo.name"
            v-model.lazy="updatedInfo.name"
            v-if="this.editMode"
        ></b-form-input>
        <br />
        <b-avatar size="100px">
          <img :src="this.userInfo.profilePic" width="110" /> </b-avatar
        ><br /><br />
        <b-button class="avatarBut" v-on:click="setAvatar()"
          >Switch avatar</b-button
        >
        <b-button
          v-if="!this.editMode"
          variant="info"
          class="button"
          v-on:click="editClick()"
          >Edit Profile</b-button
        >
        <b-button
          v-if="this.editMode"
          variant="info"
          class="button"
          v-on:click="applyClick()"
          >Apply</b-button
        >
      </div>
    </div>
    <div id="right">
      <div v-if="this.editMode" class="accCard">
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Email</label
          >
          <b-form-input
            id="input-email"
            class="input"
            placeholder=""
            v-model.lazy="updatedInfo.email"
            type="email"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="">Password</label>
          <b-form-input
            id="input-password"
            class="input"
            placeholder=""
            v-model.lazy="updatedInfo.password"
            type="password"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Telegram</label
          >
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
            type="number"
            min="1"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Height</label
          >
          <b-form-input
            id="input-height"
            class="input"
            placeholder=""
            v-model.lazy="updatedInfo.height"
            type="number"
            min="1"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Weight</label
          >
          <b-form-input
            id="input-weight"
            class="input"
            placeholder=""
            v-model.lazy="updatedInfo.weight"
            type="number"
            min="1"
          ></b-form-input>
        </b-form>
      </div>
      <div v-if="!this.editMode" class="accCard">
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Email</label
          >
          <b-form-input
            id="input-email"
            class="input"
            :placeholder="userInfo.email"
            :disabled="true"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label">Password</label>
          <b-form-input
            id="input-password"
            class="input"
            :placeholder="userInfo.placeholder"
            :disabled="true"
            type="password"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Telegram</label
          >
          <b-form-input
            id="input-telegram"
            class="input"
            :placeholder="userInfo.tele"
            :disabled="true"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref">Age</label>
          <b-form-input
            id="input-age"
            class="input"
            :placeholder="userInfo.age"
            :disabled="true"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Height</label
          >
          <b-form-input
            id="input-height"
            class="input"
            :placeholder="[[userInfo.height]] + 'cm'"
            :disabled="true"
          ></b-form-input>
        </b-form>
        <b-form inline>
          <label class="label" for="inline-form-custom-select-pref"
            >Weight</label
          >
          <b-form-input
            id="input-weight"
            class="input"
            :placeholder="[[userInfo.weight]] + 'kg'"
            :disabled="true"
          ></b-form-input>
        </b-form>
      </div>
      <div class="notifCard" v-if="this.editMode">
        <p id="notifHeader">Customize Your Notifications</p>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >New Gym Promotions</label
          >
          <b-form-checkbox
            switch
            class="switch"
            v-model="updatedInfo.showPromo"
          ></b-form-checkbox>
        </b-form>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >Fitness Milestones</label
          >
          <b-form-checkbox
            switch
            class="switch"
            v-model="updatedInfo.showMilestones"
          ></b-form-checkbox>
        </b-form>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >Class Availability</label
          >
          <b-form-checkbox
            switch
            class="switch"
            v-model="updatedInfo.showClassAvail"
          ></b-form-checkbox>
        </b-form>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >Show Telegram Handle</label
          >
          <b-form-checkbox
            switch
            class="switch"
            v-model="updatedInfo.showTele"
          ></b-form-checkbox>
        </b-form>
      </div>
      <div class="notifCard" v-if="!this.editMode">
        <p id="notifHeader">Customize Your Notifications</p>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >New Gym Promotions</label
          >
          <b-form-checkbox
            switch
            class="switch"
            :disabled="true"
            v-model="userInfo.showPromo"
          ></b-form-checkbox>
        </b-form>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >Fitness Milestones</label
          >
          <b-form-checkbox
            switch
            class="switch"
            :disabled="true"
            v-model="userInfo.showMilestones"
          ></b-form-checkbox>
        </b-form>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >Class Availability</label
          >
          <b-form-checkbox
            switch
            class="switch"
            :disabled="true"
            v-model="userInfo.showClassAvail"
          ></b-form-checkbox>
        </b-form>
        <b-form inline>
          <label class="labelNotif" for="inline-form-custom-select-pref"
            >Show Telegram Handle</label
          >
          <b-form-checkbox
            switch
            class="switch"
            :disabled="true"
            v-model="userInfo.showTele"
          ></b-form-checkbox>
        </b-form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import firebase from "firebase";
import database from "../firebase.js";
import Footer from "./Footer.vue";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      email: { type: String },
      user: null,
      id: { type: String },
      userInfo: {},
      updatedInfo: {},
      editMode: false,
      change: false,
      original:
        "https://image.freepik.com/free-vector/cute-smiling-happy-strong-avocado-with-jumping-rope-flat-cartoon-character-illustration-icon-isolated-white-avocado-gym-lifestyle-sport-jump-rope-health-fitness-nutrition_92289-524.jpg",
      changed:
        "https://image.freepik.com/free-vector/cute-funny-avocado-make-gym-with-dumbbells_92289-2296.jpg",
    };
  },
  methods: {
    setAvatar: function () {
      this.change = !this.change;
      var doc = database.collection("user").doc(this.id);
      if (this.change) {
        doc
          .update({
            profilePic: this.changed,
          })
          .then(() => {
            //console.log('successfully updated profile pic')
          });
        this.userInfo.profilePic = this.changed;
      } else {
        doc
          .update({
            profilePic: this.original,
          })
          .then(() => {
            //console.log('successfully updated profile pic')
          });
        this.userInfo.profilePic = this.original;
      }
    },
    editClick: function () {
      this.editMode = true;
    },
    applyClick: function () {
      this.editMode = false;
      for (let key in this.updatedInfo) {
        if (this.updatedInfo[key] == "") {
          if (
            key != "showTele" &&
            key != "showClassAvail" &&
            key != "showMilestones" &&
            key != "showPromo"
          ) {
            delete this.updatedInfo[key];
          }
        }
      }
      var vm = this;
      //console.log("showTele: " + this.updatedInfo.showTele);
      if (Object.keys(this.updatedInfo).length != 0) {
        database
          .collection("user")
          .doc(this.id)
          .update(this.updatedInfo)
          .then(() => {
            //console.log("Document successfully updated");
            if (this.updatedInfo.password != this.userInfo.password) {
              this.user
                .updatePassword(this.updatedInfo.password)
                .then(function () {
                  // Update successful.
                  vm.checkEmail();
                })
                .catch(function (error) {
                  // An error happened.
                  console.log(error);
                });
            } else {
              vm.checkEmail();
            }
          });
      }
    },
    checkEmail: function () {
      if (this.updatedInfo.email != this.userInfo.email) {
        this.user
          .updateEmail(this.updatedInfo.email)
          .then(function () {
            // Update successful.
            location.reload();
            //this.$router.go();
          })
          .catch(function (error) {
            // An error happened.
            console.log(error);
          });
      } else {
        this.$router.go();
      }
    },
    fetchUserEmail: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          //console.log(user.uid);
          this.user = firebase.auth().currentUser;
          this.email = user.email;
          //console.log("email: " + this.email);
          this.fetchUserInfo();
        } else {
          // User not logged in or has just logged out.
        }
      });
    },
    fetchUserInfo: function () {
      var docRef;
      database
        .collection("user")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            if (
              doc.data().email != null &&
              doc.data().email.toString().toLowerCase() ==
                this.email.toLowerCase()
            ) {
              this.id = doc.id;
              //console.log("id: " + this.id);
            }
          });
          docRef = database.collection("user").doc(this.id);
          docRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                //console.log("Document data:", doc.data());
                this.userInfo = doc.data();
                var mystring = "*";
                this.userInfo.placeholder = mystring.repeat(
                  this.userInfo.password.length
                );
                //console.log(this.userInfo.placeholder);
                this.updatedInfo = doc.data();
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
            })
            .catch((error) => {
              console.log("Error getting document:", error);
            });
        });
    },
  },
  created() {
    this.fetchUserEmail();
  },
  watch: {
    updatedInfo: function () {
      //console.log(this.updatedInfo);
    },
  },
};
</script>

<style scoped>
.button,
.avatarBut,
.labelNotif,
.input {
  font-family: "Rubik", sans-serif;
}
.button {
  margin-left: 3%;
}
#body {
  font-family: "Lucida Sans";
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
  opacity: 1;
  z-index: -1;
  background: url(/static/overview_background.jpg);
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
#input-name {
  width: 50%;
  height: 15%;
  margin-left: 25%;
  margin-bottom: 5%;
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
  margin-top: 0.5%;
  font-weight: bolder;
  font-size: 1.5rem;
  font-family: "Fjalla One", sans-serif;
  color: gold;
  background-color: rgb(46, 43, 43);
  width: 50%;
  margin-left: 25%;
  border-radius: 10px;
  padding-top: 1%;
  padding-bottom: 1%;
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
  font-family: "Rubik", sans-serif;
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
  color: #8b0000;
  font-weight: bolder;
  font-size: 18px;
  font-family: "Fjalla One", sans-serif;
}
Footer {
  position: absolute;
  top: 100%;
  width: 100%;
}
</style>