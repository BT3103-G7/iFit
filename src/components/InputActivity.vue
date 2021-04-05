<template>
<div>
<form @submit.prevent="input">
  <div id="content-wrap">
    <div id="background"></div>
    <br><br>

    <div id="date-activity-placeholder">
      <p class="p-3 mb-2 bg-danger text-white">Choose a date </p>
      <b-form-datepicker id="datepicker-full-width" menu-class="w-100" calendar-width="100%" v-model="date" :max="maxDate" locale="en" class="mb-2"></b-form-datepicker>
      <!-- <p>Value: {{ new Date(date) }}</p> 
      <p>Type: {{ typeof date }}</p>  !-->
      <br>
      <p class="p-3 mb-2 bg-danger text-white">Choose an activity</p>
      <div>
          <b-form-select v-model="activity" :options="options" class="mb-3">
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                  <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
              <!-- These options will appear after the ones from 'options' prop -->
              <b-form-select-option value="Static Cycling">Static Cycling</b-form-select-option>
              <b-form-select-option value="Running">Running</b-form-select-option>
              <b-form-select-option value="Rowing Machine">Rowing Machine</b-form-select-option>
              <b-form-select-option value="Elliptical">Elliptical</b-form-select-option>
              <b-form-select-option value="Stairmaster">Stairmaster</b-form-select-option>
          </b-form-select>
          <!-- <div class="mt-2">Value: <strong>{{ activity }}</strong></div> -->
      </div>
    </div>
    <br><br><br>

    <div id="time-placeholder">
        <div style='width:20%; height:100%; float:left'><br></div>
        <div style='width:20%; height:100%; float:left'>
            <p class="p-3 mb-2 bg-danger text-white">Start time</p>
            <!-- <div> -->
                <!-- <b-form-timepicker v-model="start" locale="en"></b-form-timepicker> -->
                <!-- <div class="mt-2">Value: {{ start }}</div> -->
                <!-- <p>Type: {{ Timestamp.valueof(start) }}</p> -->
            <!-- </div> --> 
              <b-form-timepicker v-model="start" locale="en"></b-form-timepicker>
            <br>
        </div>
        <div style='width:20%; height:100%; float:left'><br></div>
          
        <div style='width:20%; height:100%; float:left'>
            <p class="p-3 mb-2 bg-danger text-white">End time</p>
            <div>
                <b-form-timepicker v-model="end" locale="en"></b-form-timepicker>
                <!-- <div class="mt-2">Value: {{ end }}</div> -->
            </div>
            <br>
        </div>
        <div style='width:20%; height:100%; float:left'><br></div> 
    </div>

    <div id="button-placeholder">
        <!-- <b-button type="submit" variant="warning" size=lg v-on:click="onSubmit()">SUBMIT</b-button> -->
        <br><b-button type="submit" variant="warning" size=lg><b>SUBMIT</b></b-button>
    </div> 
    
  </div>
</form>
</div>
</template>


<script>
import database from '../firebase'
  export default {
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const maxDate = new Date(today)

      return {
        maxDate: maxDate,
        activity: null,
        //calories: null,
        date: null,
        start: null,
        end: null,
        space: ' ',
        userid: '123432',
      }
    },
    methods: {
        input() {
          if (this.activity == null || this.date == null || this.start == null || this.end == null) {// if any field is missing
            alert("Please input all fields!")
          } 
          else { //if start time is later than end time
            var fullDate = new Date(this.date)
            var year = fullDate.getFullYear()
            var month = fullDate.getMonth() + 1
            var date = fullDate.getDate()
            var startTime = new Date(this.date.concat(this.space).concat(this.start))
            var startHour = startTime.getHours()
            var endTime = new Date(this.date.concat(this.space).concat(this.end))
            var endHour = endTime.getHours()
            var time_difference = (endTime.getTime() - startTime.getTime())/60000 //no. of minutes of activity
            console.log(time_difference)
            if (time_difference <= 0) {
              alert("End time should be later than start time!")
            } else {
              //if(this.activity != null && this.date != null && this.start != null && this.end != null) {
              var calories = 0
              if (this.activity == "Static Cycling") {
                calories = time_difference * 7
              } else if (this.activity == "Running") {
                calories = time_difference * 11
              } else if (this.activity == "Rowing Machine") {
                calories = time_difference * 9
              } else if (this.activity == "Elliptical") {
                calories = time_difference * 6
              } else {
                calories = time_difference * 16
              }
              // database.collection("activities").get().then((snapshot) => {
              //   snapshot.docs.forEach((doc) => {
              //     var results = doc.data();
              //     var calspermin = 0;
              //     if (results["name"] == this.activity) {
              //       /* database.collection('input').add({
              //         'calories': time_difference * results["calspermin"]
              //       }) */
              //       calspermin = results["calspermin"]
              //       console.log(calspermin)
              //       this.calspermin = calspermin
              //     }
              //   })
              // });
              database.collection('inputs').add({
                  'activity': this.activity,
                  'calories': Number(calories),
                  'date': Number(date),
                  'month': Number(month),
                  'year': Number(year),
                  'startHour': Number(startHour),
                  'endHour': Number(endHour),
                  'userid': Number(this.userid),
            })
            .then(() => {
                        alert('Your activity is recorded!');
                        this.$router.push('/overview');
                    })
                    .catch(error => {
                        alert(error.message);
                    });
          }
        }
      },
    }
  }
</script>

<style scoped>
#background {
    position: absolute;
    background: url(../assets/inputactivity_background.png);
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
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

</style>