<template>
  <div class="chart">
    <chart></chart>
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

<style>
.chart {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  height: 500px;
}
</style>