<template>
  <div class="chart">
    <chart id="pie"></chart>
  </div>
</template>

<script>
import Chart from "./PieChart.js";

export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
.chart {
  background-color: white;
  border-radius: 10px;
  width: 23%;
  padding: 1%;
  margin: 1% 0 1% 12%;
  height: 90%;
  float: left;
}
#pie {
  max-height: 100%;
}
</style>