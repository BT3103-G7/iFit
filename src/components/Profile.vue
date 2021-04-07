<template>
    <div id="placeholder">
        <div id="bg"></div>
        <div id="left">
            <div id="profileCard">
                <b-avatar rounded="sm" size="22vh"></b-avatar>
                <p id="name">John Doe</p>
                <p id="memDetails">Membership ID: 12345 <br> Membership expiry: 12 Aug 2021</p>
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
                        placeholder=""
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Password</label>
                    <b-form-input
                        id="input-password"
                        class="input"
                        placeholder=""
                    ></b-form-input>
                </b-form>    
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Telegram</label>
                    <b-form-input
                        id="input-telegram"
                        class="input"
                        placeholder=""
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">HP Number</label>
                    <b-form-input
                        id="input-hpNum"
                        class="input"
                        placeholder=""
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Age</label>
                    <b-form-input
                        id="input-age"
                        class="input"
                        placeholder=""
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Height</label>
                    <b-form-input
                        id="input-height"
                        class="input"
                        placeholder=""
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Weight</label>
                    <b-form-input
                        id="input-weight"
                        class="input"
                        placeholder=""
                    ></b-form-input>
                </b-form>
            </div>
            <div v-if="!this.editMode" class="accCard">
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Email</label>
                    <b-form-input
                        id="input-email"
                        class="input"
                        placeholder="asdasd"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Password</label>
                    <b-form-input
                        id="input-password"
                        class="input"
                        placeholder="asdads"
                        disabled="true"
                    ></b-form-input>
                </b-form>    
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Telegram</label>
                    <b-form-input
                        id="input-telegram"
                        class="input"
                        placeholder="asdasd"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">HP Number</label>
                    <b-form-input
                        id="input-hpNum"
                        class="input"
                        placeholder="asdasdasd"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Age</label>
                    <b-form-input
                        id="input-age"
                        class="input"
                        placeholder="asdasd"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Height</label>
                    <b-form-input
                        id="input-height"
                        class="input"
                        placeholder="asdasd"
                        disabled="true"
                    ></b-form-input>
                </b-form>
                <b-form inline>
                    <label class="label" for="inline-form-custom-select-pref">Weight</label>
                    <b-form-input
                        id="input-weight"
                        class="input"
                        placeholder="asdasds"
                        disabled="true"
                    ></b-form-input>
                </b-form>
            </div>
            <div class="notifCard" v-if="this.editMode">
                <p id="notifHeader">Customize Your Notifications</p>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">New Gym Promotions</label>
                    <b-form-checkbox switch class="switch"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Fitness Milestones</label>
                    <b-form-checkbox switch class="switch"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Class Availability</label>
                    <b-form-checkbox switch class="switch"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Membership Expiry</label>
                    <b-form-checkbox switch class="switch"></b-form-checkbox>
                </b-form>
            </div>
            <div class="notifCard" v-if="!this.editMode">
                <p id="notifHeader">Customize Your Notifications</p>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">New Gym Promotions</label>
                    <b-form-checkbox switch class="switch" disabled="true"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Fitness Milestones</label>
                    <b-form-checkbox switch class="switch" disabled="true"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Class Availability</label>
                    <b-form-checkbox switch class="switch" disabled="true"></b-form-checkbox>
                </b-form>
                <b-form inline>
                    <label class="labelNotif" for="inline-form-custom-select-pref">Membership Expiry</label>
                    <b-form-checkbox switch class="switch" disabled="true"></b-form-checkbox>
                </b-form>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
      return {
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
        }
    }
}
</script>

<style scoped>
#body {
    font-family: 'Lucida Sans';
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
    height: 70vh;
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
    height: 40vh;
    width: 70%;
    border-radius: 10px;
    position: relative;
    left: 2%;
    padding: 2% 1% 2% 1%;
}
.notifCard {
    margin-top: 4vh;
    background-color: white;
    height: 26vh;
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
</style>