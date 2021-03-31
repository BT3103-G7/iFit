import { Pie } from 'vue-chartjs'
import database from '../../firebase.js'
import moment from 'moment'


export default {
    extends: Pie,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    label: "Calories",
                    backgroundColor: [],
                    data: []
                }]
            },
            options: {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'Calories/Activity This Week',
                    fontSize: 16
                },
                tooltips: {
                    callbacks: {
                      label: function(tooltipItem, chartData) {
                        return chartData.labels[tooltipItem.index] + ': ' + chartData.datasets[0].data[tooltipItem.index] + ' kcal';
                      }
                    }
                  },
                responsive: true,
                maintainAspectRatio: false,
                
            }
        }
    },
    methods: {
        fetchItems: function () {
            moment.locale('en-sg', {
                week: {
                    dow:1
                }
            });
            var retrievedInputs = {};
            var currentWeek = moment().week();
            console.log("Current week is " + currentWeek);
            database.collection('inputs').where("userid", "==", "123432").get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    var results = doc.data();
                    var dateData = results['year'] + '-' + results['month'] + '-' + results['date'];
                    var dataWeek = moment(dateData).week();
                    console.log(dataWeek);
                    if (dataWeek == currentWeek) {
                        // console.log(results);
                        var activity = results['activity'];
                        if (!(activity in retrievedInputs)) {
                            retrievedInputs[activity] = 0;
                        }
                        retrievedInputs[activity] =  retrievedInputs[activity] + results['calories'];
                    } 
                })
                var key2;
                for (key2 in retrievedInputs) {
                    this.datacollection.labels.push(key2);
                    this.datacollection.datasets[0].data.push(retrievedInputs[key2]);
                    var randColor = "#" +  Math.floor(Math.random()*16777215).toString(16);
                    this.datacollection.datasets[0].backgroundColor.push(randColor);
                }
                this.renderChart(this.datacollection, this.options);
            });
        }
    },
    created() {
        this.fetchItems();
    }

}
