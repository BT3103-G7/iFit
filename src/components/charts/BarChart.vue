<template>
    <div class="chart">
        <chart id="bar"></chart>
    </div>
</template>

<script>
import Chart from './BarChart.js'

export default {
    components: {
        Chart,
    },
}
</script>

<style scoped>
.chart {
    background-color: white;
    padding: 1%;
    border-radius: 10px;
    width: 30%;
    margin: 1% 0 0 0%;
    height: 90%;
    float: right;
}
#bar {
  max-height: 100%;
}
</style>
