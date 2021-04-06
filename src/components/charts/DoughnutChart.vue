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
  width: 37%;
  padding: 1%;
  margin: 1% 12% 1% 0;
  height: 90%;
  float: right;
}
#doughnut {
  max-height: 100%;
}
</style>
