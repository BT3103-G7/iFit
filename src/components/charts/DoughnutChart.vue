<template>
  <div class="chart">
    <chart id="doughnut" v-bind:user="user"></chart>
  </div>
</template>

<script>
import Chart from "./DoughnutChart.js";

export default {
  components: {
    Chart
  },
  props: ['user'],
};
</script>

<style scoped>
.chart {
  background-color: white;
  border-radius: 10px;
  width: 23%;
  padding: 1%;
  margin: 1% 0% 1% 1%;
  height: 90%;
  float: left;
}
#doughnut {
  max-height: 100%;
}
</style>
