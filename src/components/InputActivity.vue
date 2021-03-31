<template>
  <div id="content-wrap">
    <div id="background"></div>
    <br><br>
    <p class="p-3 mb-2 bg-danger text-white">Choose a date </p>
    <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>
    <!-- <p>Value: {{ date }}</p> -->
    <br>

    <p class="p-3 mb-2 bg-danger text-white">Choose an activity</p>
    <div>
        <b-form-select v-model="selected" :options="options" class="mb-3">
            <!-- This slot appears above the options from 'options' prop -->
            <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
            </template>

            <!-- These options will appear after the ones from 'options' prop -->
            <b-form-select-option value="Static Cycling">Static Cycling</b-form-select-option>
            <b-form-select-option value="Running">Running</b-form-select-option>
            <b-form-select-option value="Rowing Machine">Rowing Machine</b-form-select-option>
            <b-form-select-option value="Elliptical">Elliptical</b-form-select-option>
            <b-form-select-option value="RStairmaster">Stairmaster</b-form-select-option>
        </b-form-select>
        <!-- <div class="mt-2">Value: <strong>{{ selected }}</strong></div> -->
    </div>
    <br>
    <div>
        <div style='width:20%; height:100%; float:left'><br></div>
        <div style='width:20%; height:100%; float:left'>
            <p class="p-3 mb-2 bg-danger text-white">Start time</p>
            <div>
                <b-time v-model="start" locale="en"></b-time>
                <!-- <div class="mt-2">Value: {{ start }}</div> -->
            </div>
            <br>
        </div>
        <div style='width:20%; height:100%; float:left'><br></div>
        
        <div style='width:20%; height:100%; float:left'>
            <p class="p-3 mb-2 bg-danger text-white">End time</p>
            <div>
                <b-time v-model="end" locale="en"></b-time>
                <!-- <div class="mt-2">Value: {{ end }}</div> -->
            </div>
            <br>
        </div>
        <div style='width:20%; height:100%; float:left'><br></div>
        
    </div>

    <div id="button-placeholder">
        <b-button type="submit" size=lg v-on:click="onSubmit()">SUBMIT</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        date: '',
        start: '',
        end: '',
      }
    },
    methods: {
        // onSubmit() {
        //     database.collection('user').add({
        //         'date': this.date[8:9],
        //         'month': this.date[5:6],
        //         'year': this.date[0:3],
        //         //'activity': this.form.activity,
        //         //'calories': this.form.duration
        //     })

        //     alert("You have successfully created an account!")
        // }
    }
  }
</script>

<style scoped>
#background {
    background: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    opacity: 1;
    z-index: -1;
}
#button-placeholder {
    top: 70%;
    position: absolute;
    z-index: 1;
    text-align: center;
    width: 100%;
}
</style>