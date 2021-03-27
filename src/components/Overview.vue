<template>
    <div id="placeholder">
      <div id="bg"></div>
      <div id="lineChart"><LineChart></LineChart></div>
      <div id="bmi"><Bmi></Bmi></div>
      <div id="pieChart"><PieChart></PieChart></div>
      <div id="doughnutChart"><DoughnutChart></DoughnutChart></div>
      <div id="button-placeholder">
        <router-link to="/inputactivity"><b-button>Input Activity</b-button></router-link>
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
#bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: black;
  opacity: 1;
  z-index: -1;
  overflow: hidden;
}
#placeholder {
  margin: 40px;

}
#lineChart {
  width: 60%;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 5%;
  background-color: transparent;
}
#bmi {
  position: absolute;
  right: 2%;
  top: 50px;
  width: 30%;
  height: 2000px;
  background-color: transparent;
}
#pieChart {
  position: absolute;
  width: 40%;
  top: 630px;
  left: 7%;
}
#doughnutChart  {
  position: absolute;
  width: 40%;
  top: 630px;
  right: 9%;
}
#button-placeholder {
  top: 60%;
  position: absolute;
  z-index: 1;
  text-align: center;
  width: 100%;
  padding-left: 50%;
}
</style>