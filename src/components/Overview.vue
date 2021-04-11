<template>
    <div>
      <div id="bg"></div>
      <div id="top">
        <LineChart></LineChart>
        <Bmi></Bmi>
      </div>
      <div id="bottomleft">
        <PieChart></PieChart>
        <DoughnutChart></DoughnutChart>
        <BarChart></BarChart>
      </div>
      <!--<div id="bottomright">
        <BarChart></BarChart>
      </div>-->
    </div>
</template>

<script>
import LineChart from './charts/LineChart.vue'
import Bmi from './charts/Bmi.vue'
import PieChart from './charts/PieChart.vue'
import DoughnutChart from './charts/DoughnutChart.vue'
import BarChart from './charts/BarChart.vue'

export default {
    components: {
      LineChart,
      Bmi,
      PieChart,
      DoughnutChart,
      BarChart,
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
#bottomleft {
  position: fixed;
  left: 0;
  right: 0;
  height: 50%;
  bottom: 0;
}
/*#bottomright {
  position: fixed;
  left: 0;
  right: 0;
  height: 50%;
  bottom: 0;
  margin-right: 12%;
}*/
#bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background: url(../assets/overview_background.jpg);
  opacity: 90%;
}

</style>