<template>
    <div>
      <div id="bg"></div>
      <div id="top">
        <LineChart></LineChart>
        <Bmi></Bmi>
      </div>
      <div id="bottom">
        <PieChart></PieChart>
        <DoughnutChart></DoughnutChart>
      </div>
    </div>
</template>

<script>
import LineChart from './charts/LineChart.vue'
import Bmi from './charts/Bmi.vue'
import PieChart from './charts/PieChart.vue'
import DoughnutChart from './charts/DoughnutChart.vue'

export default {
    components: {
      LineChart,
      Bmi,
      PieChart,
      DoughnutChart
    },
    data() {
      return {

        }
    },
    methods: {
    }
}
</script>

<style scoped>
#top {
  position: fixed;
  left: 0;
  right: 0;
  height: 45%;
  top: 5%;
}
#bottom {
  position: fixed;
  left: 0;
  right: 0;
  height: 50%;
  bottom: 0;
}
#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 1;
}
</style>