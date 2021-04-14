import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    props: {
        user: {
            type: String
        }
    },
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [
                    {
                        label: "Calories In",
                        backgroundColor: "#8D6E63",
                        data: [],
                    }, {
                        label: "Calories Out",
                        backgroundColor: "#78909C",
                        data: [],
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Weekly Comparison of Net Calories Intake',
                    fontSize: 16
                },
                responsive: true,
                maintainAspectRatio: false
            },
        }
    },
    methods: {
        fetchItems() {
            var today = new Date();
            this.datacollection.labels = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
            var dayOfWeek = today.getDay();
            var currDate = today.getDate();
            database.collection('inputs').where("userid", "==", this.user).get().then(querySnapShot => { //access data for calories OUT
                querySnapShot.forEach(doc => {
                    for (let i = 0; i < this.datacollection.labels.length; i++) {
                        this.datacollection.datasets[1].data.push(0); //initialise each day's calorie count to 0
                    }
                    var docDate = new Date(doc.data().year, doc.data().month - 1, doc.data().date);
                    if (doc.data().month == (today.getMonth() + 1)) { //if same month
                        if (doc.data().date >= (currDate - dayOfWeek) && doc.data().date <= (currDate + 6 - dayOfWeek)) {
                            this.datacollection.datasets[1].data[docDate.getDay()] += doc.data().calories;
                        }
                    }
                    else if (((today.getMonth() + 1) - doc.data().month) == 1) { //account for adjacent month within same week
                        var lastOfDocMonth = new Date(doc.data().year, doc.data().month, 0);
                        var newDate = lastOfDocMonth.getDate() + currDate;
                        if (doc.data().date >= (newDate - dayOfWeek)) {
                            this.datacollection.datasets[1].data[docDate.getDay()] += doc.data().calories;
                        }
                    }
                })
            });
            database.collection('caloriesIn').where("userid", "==", this.user).get().then(querySnapShot => { //access data for calories IN
                querySnapShot.forEach(doc => {
                    for (let i = 0; i < this.datacollection.labels.length; i++) {
                        this.datacollection.datasets[0].data.push(0); //initialise each day's calorie count to 0
                    }
                    var docDate = new Date(doc.data().year, doc.data().month - 1, doc.data().date);
                    if (doc.data().month == (today.getMonth() + 1)) { //if same month
                        if (doc.data().date >= (currDate - dayOfWeek) && doc.data().date <= (currDate + 6 - dayOfWeek)) {
                            this.datacollection.datasets[0].data[docDate.getDay()] += doc.data().calories;
                        }
                    }
                    else if (((today.getMonth() + 1) - doc.data().month) == 1) { //account for adjacent month within same week
                        var lastOfDocMonth = new Date(doc.data().year, doc.data().month, 0);
                        var newDate = lastOfDocMonth.getDate() + currDate;
                        if (doc.data().date >= (newDate - dayOfWeek)) {
                            this.datacollection.datasets[0].data[docDate.getDay()] += doc.data().calories;
                        }
                    }
                })
                this.renderChart(this.datacollection, this.options);
            })
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