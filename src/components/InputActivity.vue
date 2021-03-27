<template>
  <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>
    <p>Value: {{ date }}</p>
    <br>

    <label for="example-datepicker">Choose an activity</label>
    <div>
        <b-dropdown id="dropdown-1" text="No activity selected" class="m-md-2">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
    </div>
    <br>

    <label for="example-datepicker">Choose duration</label>
    <div>
        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
        <div class="mt-2">Value: '{{ value }}'</div>
    </div>
    <br>

    <br><b-button type="submit" size=lg v-on:click="onSubmit()">SUBMIT</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          date: '',
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