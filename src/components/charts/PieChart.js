import { Pie } from 'vue-chartjs'
import database from '../../firebase.js'
import moment from 'moment'


export default {
    extends: Pie,
    props: {
        user: {
            type: String
        }
    },
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
                        label: function (tooltipItem, chartData) {
                            return chartData.labels[tooltipItem.index] + ': ' + chartData.datasets[0].data[tooltipItem.index] + ' kcal';
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,

            },
        }
    },
    methods: {
        fetchItems: function () {
            moment.updateLocale('en-sg', {
                week: {
                    dow: 0
                }
            });
            var retrievedInputs = {};
            var currentWeek = moment().week();
            database.collection('inputs').where("userid", "==", this.user).get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    var results = doc.data();
                    var dateMonth;
                    if (results['month'] < 10) {
                        dateMonth = '0' + results['month'];
                    } else {
                        dateMonth = results['month'];
                    }
                    var dateDay;
                    if (results['date'] < 10) {
                        dateDay = '0' + results['date'];
                    } else {
                        dateDay = results['date'];
                    }
                    var dateData = results['year'] + '-' + dateMonth + '-' + dateDay;
                    var dataWeek = moment(dateData, "YYYY-MM-DD").week();
                    //console.log(dateData + " " + dataWeek);
                    if (dataWeek == currentWeek) {
                        var activity = results['activity'];
                        if (!(activity in retrievedInputs)) {
                            retrievedInputs[activity] = 0;
                        }
                        retrievedInputs[activity] = retrievedInputs[activity] + results['calories'];
                    }
                })
                var key2;
                for (key2 in retrievedInputs) {
                    this.datacollection.labels.push(key2);
                    this.datacollection.datasets[0].data.push(retrievedInputs[key2]);
                    var randColor = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
                    while (this.datacollection.datasets[0].backgroundColor.includes(randColor)) {
                        randColor = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
                    }
                    this.datacollection.datasets[0].backgroundColor.push(randColor);
                }
                this.renderChart(this.datacollection, this.options);
            });
        }
    },
    watch: {
        user: function () {
            this.fetchItems();
        }
    },
    created() {
        this.fetchItems();
    }
}
