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
      <Footer></Footer>
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
import Footer from './Footer.vue'

export default {
    components: {
      LineChart,
      Bmi,
      PieChart,
      DoughnutChart,
      BarChart,
      Footer
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
  position: absolute;
  left: 0;
  right: 0;
  height: 45%;
  top: 10%;
}
#bottomleft {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  bottom: -5%;
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
  min-height: 110%;
  background-repeat: no-repeat;
  background-size: cover;
  background: url(/static/overview_background.jpg);
  opacity: 90%;
}
Footer {
  position: absolute;
  top: 110%;
  width: 100%;
}
</style>