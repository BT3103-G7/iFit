<template>
  <div class="chart">
    <chart id="doughnut"></chart>
    <b-button variant="success" id="button" to="/">+</b-button>
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
#button {
  position: absolute;
  width: 4%;
  top: 8%;
  right: 13%;
  font-size: 30px;
  font-weight: bold;
  padding: 0;
}
</style>
