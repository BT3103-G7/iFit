<template>
<div id="placeholder">
    <div id="dropdown">
    <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <chart id="chart" v-bind:period="selected" v-bind:user="user"></chart>
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
    props: ['user'],
}
</script>

<style scoped>
#dropdown {
    width: 15%;
    margin: auto;
}
#placeholder {
    background-color: white;
    padding: 1%;
    border-radius: 10px;
    width: 55%;
    margin: 2% 0 0 12%;
    height: 90%;
    float: left;
}
#chart {
    max-height: 80%;
}
</style>
