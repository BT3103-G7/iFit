<template>
    <div id="placeholder">
      <div id="bg"></div>
      <div id="top">
        <LineChart></LineChart>
        <Bmi></Bmi>
        <div id="button-placeholder">
          <router-link to="/inputactivity"><b-button variant="outline-primary">Input Activity</b-button></router-link>
          <router-link to="/inputclass"><b-button variant="outline-primary">Input Class</b-button></router-link>
        </div>
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 1;
  z-index: -1;
}
#button-placeholder {
  top: 65%;
  position: absolute;
  z-index: 1;
  text-align: center;
  width: 100%;
  padding-left: 55%;
}
#button-placeholder2 {
  top: 60%;
  position: absolute;
  z-index: 1;
  text-align: center;
  width: 100%;
  padding-left: 70%;
}
</style>