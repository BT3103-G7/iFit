<template>
  <div class="chart">
    <chart id="doughnut"></chart>
  </div>
</template>

<script>
import Chart from "./DoughnutChart.js";

export default {
  components: {
    Chart
  },
};
</script>

<style scoped>
.chart {
  background-color: white;
  border-radius: 10px;
  width: 23%;
  padding: 1%;
  margin: 1% 12% 1% 2%;
  height: 90%;
  float: left;
}
#doughnut {
  max-height: 100%;
}
</style>
