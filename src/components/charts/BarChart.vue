<template>
    <div class="chart">
        <chart id="bar" v-bind:user="user"></chart>
    </div>
</template>

<script>
import Chart from './BarChart.js'

export default {
    components: {
        Chart,
    },
    props: ['user'],
}
</script>

<style scoped>
.chart {
    background-color: white;
    padding: 1%;
    border-radius: 10px;
    width: 28%;
    margin: 1% 0% 1% 1%;
    height: 90%;
    float: left;
}
#bar {
  max-height: 100%;
}
</style>
