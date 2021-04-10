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
      <p class="p-3 mb-2 bg-danger text-white">Choose a meal category</p>
      <div>
          <b-form-select v-model="mealCat" :options="mealCat_options" class="mb-3">
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                  <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
          </b-form-select>
          <!-- <div class="mt-2">Value: <strong>{{ activity }}</strong></div> -->
      </div>
    </div><br>

    <div id="name-cal-placeholder">
        <div style='width:20%; height:100%; float:left'><br></div>
        <div style='width:20%; height:100%; float:left'>
            <p class="p-3 mb-2 bg-danger text-white">Enter Name of food</p>
            <b-form-input v-model="name" placeholder="Enter Name"></b-form-input>
            <br>
        </div>
        <div style='width:20%; height:100%; float:left'><br></div>
          
        <div style='width:20%; height:100%; float:left'>
            <p class="p-3 mb-2 bg-danger text-white">Enter Calories of food</p>
            <b-form-input type="number" v-model="calories" placeholder="Enter Calories"></b-form-input>
            <br>
        </div>
        <div style='width:20%; height:100%; float:left'><br></div> 
    </div>

    <br><br>

    <div id="button-placeholder">
        <!-- <b-button type="submit" variant="warning" size=lg v-on:click="onSubmit()">SUBMIT</b-button> -->
        <br><b-button type="submit" variant="warning" size=lg><b>SUBMIT</b></b-button>
    </div> 
    
  </div>
</form>
</div>
</template>


<script>
import firebase from 'firebase'
import database from '../firebase'
  export default {
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const maxDate = new Date(today)

      return {
        maxDate: maxDate,
        mealCat: null,
        date: null,
        name: null,
        calories: null,
        space: ' ',
        //userid: '123432',
        mealCat_options: [
            {value: "Breakfast", text: "Breakfast"}, 
            {value: "Lunch", text: "Lunch"},
            {value: "Dinner", text: "Dinner"}
            ],
        calories_list:[]
      }
    },
    methods: {
        input() {
          if (this.mealCat == null || this.date == null || this.name == null || this.calories == null) {// if any field is missing
            alert("Please input all fields!")
          } 
          else { //if start time is later than end time
            var fullDate = new Date(this.date)
            var year = fullDate.getFullYear()
            var month = fullDate.getMonth() + 1
            var date = fullDate.getDate()
            database.collection('caloriesIn').add({
                'name': String(this.name),
                'calories': Number(this.calories),
                'mealCat': String(this.mealCat),
                'date': Number(date),
                'month': Number(month),
                'year': Number(year),
                'userid': firebase.auth().currentUser.uid,
            })
            .then(() => {
                alert('Your calorie intake is recorded!');
                this.$router.push('/overview');
                })
            .catch(error => {
                alert(error.message);
                });
            }
        }
    },
}
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
#name-cal-placeholder {
    top: 60%;
    width: 100%;
    position: center;
    z-index: 1;
    text-align: center;
}

</style>