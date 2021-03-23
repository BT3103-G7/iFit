<template>
<div id="placeholder">
    <div id="dropdown">
    <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <chart v-bind:period = "selected"></chart>
</div>
</template>

<script>
import Chart from './LineChart.js'

export default {
    components: {
        Chart,
    },
    data() {
        return {
            selected: "Daily", //default value is daily
            options: [
                {value: "Daily", text: "Daily"},
                {value: "Weekly", text: "Weekly"},
                {value: "Monthly", text: "Monthly"},
                {value: "Yearly", text: "Yearly"}
            ]
        }
    },
}
</script>

<style scoped>
#dropdown {
    width: 15%;
    margin: auto;
}
#placeholder {
    background-color: white;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    height: 500px;
}
</style>
