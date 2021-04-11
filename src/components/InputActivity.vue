<template>
  <div>
    <div id="backbutton-placeholder">
      <router-link to="/calsout"
        ><img src="../assets/back_button.png" height="50px" width="50px"
      /></router-link>
    </div>

    <form @submit.prevent="input">
      <div id="content-wrap">
        <div id="background"></div>
        <br /><br />

        <div id="date-activity-placeholder">
          <p class="p-3 mb-2 bg-info text-white">Choose a date</p>
          <b-form-datepicker
            id="datepicker-full-width"
            menu-class="w-100"
            calendar-width="100%"
            v-model="date"
            :max="maxDate"
            locale="en"
            class="mb-2"
          ></b-form-datepicker>
          <!-- <p>Value: {{ new Date(date) }}</p> 
        <p>Type: {{ typeof date }}</p>  !-->
          <br />
          <p class="p-3 mb-2 bg-info text-white">Choose an activity</p>
          <div>
            <b-form-select
              v-model="activity"
              :options="activity_options"
              class="mb-3"
            >
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Please select an option --</b-form-select-option
                >
              </template>
            </b-form-select>
            <!-- <div class="mt-2">Value: <strong>{{ activity }}</strong></div> -->
          </div>
        </div>
        <br /><br /><br />

        <div id="time-placeholder">
          <div style="width: 20%; height: 100%; float: left"><br /></div>
          <div style="width: 20%; height: 100%; float: left">
            <p class="p-3 mb-2 bg-info text-white">Start time</p>
            <!-- <div> -->
            <!-- <b-form-timepicker v-model="start" locale="en"></b-form-timepicker> -->
            <!-- <div class="mt-2">Value: {{ start }}</div> -->
            <!-- <p>Type: {{ Timestamp.valueof(start) }}</p> -->
            <!-- </div> -->
            <b-form-timepicker v-model="start" locale="en"></b-form-timepicker>
            <br />
          </div>
          <div style="width: 20%; height: 100%; float: left"><br /></div>

          <div style="width: 20%; height: 100%; float: left">
            <p class="p-3 mb-2 bg-info text-white">End time</p>
            <div>
              <b-form-timepicker v-model="end" locale="en"></b-form-timepicker>
              <!-- <div class="mt-2">Value: {{ end }}</div> -->
            </div>
            <br />
          </div>
          <div style="width: 20%; height: 100%; float: left"><br /></div>
        </div>

        <div id="button-placeholder">
          <!-- <b-button type="submit" variant="warning" size=lg v-on:click="onSubmit()">SUBMIT</b-button> -->
          <br /><b-button type="submit" variant="warning" size="lg"
            ><b>SUBMIT</b></b-button
          >
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import firebase from "firebase";
import database from "../firebase";
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const maxDate = new Date(today);

    return {
      maxDate: maxDate,
      activity: null,
      date: null,
      start: null,
      end: null,
      space: " ",
      //userid: '123432',
      activity_options: [],
      calories_list: [],
    };
  },
  methods: {
    input() {
      if (
        this.activity == null ||
        this.date == null ||
        this.start == null ||
        this.end == null
      ) {
        // if any field is missing
        alert("Please input all fields!");
      } else {
        //if start time is later than end time
        var fullDate = new Date(this.date);
        var year = fullDate.getFullYear();
        var month = fullDate.getMonth() + 1;
        var date = fullDate.getDate();
        var startTime = new Date(
          this.date.concat(this.space).concat(this.start)
        );
        var startHour = startTime.getHours();
        var endTime = new Date(this.date.concat(this.space).concat(this.end));
        var endHour = endTime.getHours();
        var time_difference = (endTime.getTime() - startTime.getTime()) / 60000; //no. of minutes of activity
        //console.log(time_difference)
        if (time_difference <= 0) {
          alert("End time should be later than start time!");
        } else {
          //if(this.activity != null && this.date != null && this.start != null && this.end != null) {
          var calories = 0;
          var activity = this.activity;
          this.calories_list.forEach(function (test) {
            console.log(test["name"]);
            console.log(activity);
            if (activity == test["name"]) {
              calories = time_difference * test["calspermin"];
              console.log(calories);
            } else {
              console.log("DIDNT CALC CALORIES");
            }
          });
          database
            .collection("inputs")
            .add({
              activity: this.activity,
              calories: Number(calories),
              date: Number(date),
              month: Number(month),
              year: Number(year),
              startHour: Number(startHour),
              endHour: Number(endHour),
              userid: firebase.auth().currentUser.uid,
            })
            .then(() => {
              this.pushToUser(Number(calories));
              alert("Your activity is recorded!");
              this.$router.push("/overview");
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      }
    },
    pushToUser: function (calories) {
      var docRef = database
        .collection("user")
        .doc(firebase.auth().currentUser.uid);
      // Atomically increment the burnt calories of user
      docRef.update({
        burnt: firebase.firestore.FieldValue.increment(calories),
      });
    },
    fetchItems: function () {
      database
        .collection("activities")
        .get()
        .then((snapshot) => {
          let activityname = {};
          let calspermin = {};
          snapshot.docs.forEach((doc) => {
            activityname = {
              value: doc.data()["name"],
              text: doc.data()["name"],
            };
            this.activity_options.push(activityname);
            calspermin = {
              name: doc.data()["name"],
              calspermin: doc.data()["calspermin"],
            };
            this.calories_list.push(calspermin);
          });
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
#background {
  position: absolute;
  background: url(../assets/inputactivity_background.png);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
}
#button-placeholder {
  top: 80%;
  position: absolute;
  z-index: 1;
  text-align: center;
  width: 100%;
}
#content-wrap {
  padding-bottom: 150px;
}
#date-activity-placeholder {
  top: 10%;
  width: 50%;
  left: 25%;
  position: relative;
  z-index: 1;
  text-align: center;
}
#time-placeholder {
  top: 60%;
  width: 100%;
  position: center;
  z-index: 1;
  text-align: center;
}
#backbutton-placeholder {
  top: 13%;
  left: -33%;
  position: absolute;
  z-index: 1;
  text-align: center;
  width: 100%;
}
</style>