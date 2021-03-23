<template>
<div>
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
    /*methods: {
        getDaily() {
            this.timeframe = "Daily"
        },
        getWeekly() {
            this.timeframe = "Weekly"
        },
        getMonthly() {
            this.timeframe = "Monthly"
        }
    }*/
    /*<b-dropdown-item-button @click= "getDaily">Daily</b-dropdown-item-button>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button @click= "getWeekly">Weekly</b-dropdown-item-button>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button @click= "getMonthly">Monthly</b-dropdown-item-button>*/
}
</script>

<style scoped>
#dropdown {
    width: 15%;
    margin: auto
}

</style>
