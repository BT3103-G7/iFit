import { Doughnut } from 'vue-chartjs';
import database from '../../firebase.js'

export default {
  extends: Doughnut,
  data: function () {
    return {
        datacollection: {
            labels: ["Calories Burnt Today", "Burn more calories to reach your goal!"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#FF8C00", "#D3D3D3"],
                data: []
              }]
        },
        options: {
            title: {
              display: true,
              //text: 'Predicted world population (millions) in 2050'
            },
            responsive: true,
            maintainAspectRatio: false
        }
      }
    },
    methods: {
      fetchItems: function() {
        database.collection('user').get().then(querySnapShot => { //add .doc(this.id) to identify specific user in the future
          querySnapShot.forEach(doc => {
            if (doc.data().id == 1) {
              this.datacollection.datasets[0].data.push(doc.data().burnt)
              this.datacollection.datasets[0].data.push(doc.data().goal - doc.data().burnt)
              console.log(this.datacollection)
            }
          })
          this.renderChart(this.datacollection, this.options);
        })
      }
    },
  created() {
    this.fetchItems();
  }
}
