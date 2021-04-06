<template>
<div>
<form @submit.prevent="input">
  <div id="content-wrap">
    <div id="background"></div>
    <br><br>

    <div id="date-activity-placeholder">
      <p class="p-3 mb-2 bg-danger text-white">Choose a date </p>
      <b-form-datepicker id="datepicker-full-width" menu-class="w-100" calendar-width="100%" v-model="date" :max="maxDate" locale="en" class="mb-2"></b-form-datepicker>
      <br>
      <p class="p-3 mb-2 bg-danger text-white">Choose a class</p>
      <div>
          <b-form-select v-model="class_chosen" :options="class_options" class="mb-3">
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                  <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
          </b-form-select>
      </div>
    </div>
    <br><br><br>

    <div id="button-placeholder">
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
        class_chosen: null,
        date: null,
        //start: null,
        //end: null,
        space: ' ',
        add_seconds: ':00',
        userid: '123432',
        class_options: [],
        calories_list:[]
      }
    },
    methods: {
        input() {
          if (this.class_chosen == null || this.date == null) {// if any field is missing
            alert("Please input all fields!")
          } else { 
            var fullDate = new Date(this.date)
            var year = fullDate.getFullYear()
            var month = fullDate.getMonth() + 1
            var date = fullDate.getDate()

            var calories = 0
            var startHour = 0
            var endHour = 0
            
            var class_chosen = this.class_chosen
        
            this.calories_list.forEach(function(test) {
              //console.log(test['name'])
              //console.log(class_chosen)
              if (class_chosen == test['name']) {
                calories = test["cal"]
                startHour = test["start"].slice(0,2)
                endHour = test["end"].slice(0,2)
                //console.log(calories)
              } 
            });
            database.collection('inputs').add({
              'activity': this.class_chosen,
              'calories': Number(calories),
              'date': Number(date),
              'month': Number(month),
              'year': Number(year),
              'startHour': Number(startHour),
              'endHour': Number(endHour),
              'userid': Number(this.userid),
            })
            .then(() => {
                        alert('Your class is recorded!');
                        this.$router.push('/overview');
                    })
                    .catch(error => {
                        alert(error.message);
                    });

        }
      },
      fetchItems: function() {
      database.collection('class').get().then(snapshot => {
          let classname={}
          let calspermin ={}
          snapshot.docs.forEach(doc => {
              classname = {value: doc.data()["name"], text: doc.data()["name"]}; 
              this.class_options.push(classname);
              calspermin = {'name': doc.data()["name"], 'cal': doc.data()["cal"], 'start': doc.data()["start"], 'end': doc.data()["end"]}; 
              this.calories_list.push(calspermin)
          });
        });
      }
    },
    created() {
      this.fetchItems() 
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