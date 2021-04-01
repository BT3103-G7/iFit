import { Line } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Line,
    props: {
        period: {
            type: String
        }
    },
    data: function() {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    data: [],
                    borderColor: "#B71C1C",
                    fill: false
                }],
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total Calories Burnt '
                },
                responsive: true,
                maintainAspectRatio: false
            },
            activityName: [],
            activityRate: []
        }
    },
    methods: {
        fetchActivities() {
            database.collection('activities').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                        this.activityName.push(doc.data().name);
                        this.activityRate.push(doc.data().calspermin);
                })
            })
        },

        fetchItems: function() {
            const today = new Date();
            var timings = [];
            database.collection('inputs').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    if(doc.data().date == today.getDate() && (doc.data().month - 1) == today.getMonth() && doc.data().year == today.getFullYear()) { //check if same day
                        if(!timings.includes(doc.data().startHour)) {
                            timings.push(doc.data().startHour);
                        }
                        timings = timings.sort((a,b) => (a > b) ? 1 : -1); //sort timings in ascending order
                    }
                })
            });
            database.collection('inputs').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    if(doc.data().date == today.getDate() && (doc.data().month - 1) == today.getMonth() && doc.data().year == today.getFullYear()) { //check if same day
                        for(let i = 0; i < timings.length; i++) {
                            this.datacollection.datasets[0].data.push(0); //initialise each activity's calorie count to 0
                            if(doc.data().startHour == timings[i]) {
                                for(let j = 0; j < this.activityName.length; j++) {
                                    if(doc.data().activity == this.activityName[j]) {
                                        var totalCal = (doc.data().endHour - doc.data().startHour) * 60 * this.activityRate[j];
                                        this.datacollection.datasets[0].data[i] += totalCal;
                                    }
                                }
                            }
                        }
                    }
                })
                //24hour timing system
                for(let j = 0; j < timings.length; j++) {
                    if(timings[j] <= 12) {
                        if(timings[j] == 0) {
                            this.datacollection.labels.push(12 + "am");
                        }
                        else if(timings[j] == 12) {
                            this.datacollection.labels.push(12 + "pm");
                        }
                        else {
                            this.datacollection.labels.push(timings[j].toString() + "am");
                        }
                    }
                    else {
                        var newTime = (timings[j] - 12);
                        this.datacollection.labels.push(newTime.toString() + "pm");
                    }
                }
                this.renderChart(this.datacollection, this.options);
            })
        }
    },

    watch: {
        period: function() {
            const today = new Date();
            var totalCal = 0;
            if(this.period == "Daily") {
                this.datacollection.labels = []; //clears datasets and labels each time the graph changes
                this.datacollection.datasets[0].data = [];
                var timings = [];
                database.collection('inputs').get().then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        if(doc.data().date == today.getDate() && (doc.data().month - 1) == today.getMonth() && doc.data().year == today.getFullYear()) { //check if same day
                            if(!timings.includes(doc.data().startHour)) {
                                timings.push(doc.data().startHour);
                            }
                            timings = timings.sort((a,b) => (a > b) ? 1 : -1); //sort timings in ascending order
                        }
                    })
                });
                database.collection('inputs').get().then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        if(doc.data().date == today.getDate() && (doc.data().month - 1) == today.getMonth() && doc.data().year == today.getFullYear()) { //check if same day
                            for(let i = 0; i < timings.length; i++) {
                                this.datacollection.datasets[0].data.push(0); //initialise each activity's calorie count to 0
                                if(doc.data().startHour == timings[i]) {
                                    for(let j = 0; j < this.activityName.length; j++) {
                                        if(doc.data().activity == this.activityName[j]) {
                                            totalCal = (doc.data().endHour - doc.data().startHour) * 60 * this.activityRate[j];
                                            this.datacollection.datasets[0].data[i] += totalCal;
                                        }
                                    }
                                }
                            }
                        }
                    })
                    //24hour timing system
                    for(let j = 0; j < timings.length; j++) {
                        if(timings[j] <= 12) {
                            if(timings[j] == 0) {
                                this.datacollection.labels.push(12 + "am");
                            }
                            else if(timings[j] == 12) {
                                this.datacollection.labels.push(12 + "pm");
                            }
                            else {
                                this.datacollection.labels.push(timings[j].toString() + "am");
                            }
                        }
                        else {
                            var newTime = (timings[j] - 12);
                            this.datacollection.labels.push(newTime.toString() + "pm");
                        }
                    }
                    this.renderChart(this.datacollection, this.options);
                })
            }
            else if(this.period == "Weekly") {
                this.datacollection.labels = [];
                this.datacollection.datasets[0].data = [];
                this.datacollection.labels = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
                var dayOfWeek = today.getDay();
                var currDate = today.getDate();
                database.collection('inputs').get().then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        for(let i = 0; i < this.datacollection.labels.length; i++) {
                            this.datacollection.datasets[0].data.push(0); //initialise each day's calorie count to 0
                        }
                        var docDate = new Date(doc.data().year, doc.data().month - 1, doc.data().date);
                        if(doc.data().month == (today.getMonth() + 1)) { //if same month
                            if(doc.data().date >= (currDate - dayOfWeek) && doc.data().date <= (currDate + 6 - dayOfWeek)) {
                                for(let j = 0; j < this.activityName.length; j++) {
                                    if(doc.data().activity == this.activityName[j]) {
                                        totalCal = (doc.data().endHour - doc.data().startHour) * 60 * this.activityRate[j];
                                        this.datacollection.datasets[0].data[docDate.getDay()] += totalCal;
                                    }
                                }
                            }
                        }
                        else if(((today.getMonth() + 1) - doc.data().month) == 1) { //account for adjacent month within same week
                            var lastOfDocMonth = new Date(doc.data().year, doc.data().month, 0);
                            var newDate = lastOfDocMonth.getDate() + currDate;
                            if(doc.data().date >= (newDate - dayOfWeek)) {
                                for(let j = 0; j < this.activityName.length; j++) {
                                    if(doc.data().activity == this.activityName[j]) {
                                        totalCal = (doc.data().endHour - doc.data().startHour) * 60 * this.activityRate[j];
                                        this.datacollection.datasets[0].data[docDate.getDay()] += totalCal;
                                    }
                                }
                            }
                        }
                    })
                    this.renderChart(this.datacollection, this.options);
                })
            } 
            else if(this.period == "Monthly") {
                this.datacollection.labels = [];
                this.datacollection.datasets[0].data = [];
                let wk1marker = 0;
                for(let i = 1; i <= 7; i++) {
                    var date = new Date(today.getFullYear(), today.getMonth(), i);
                    if(date.getDay() == 0) {
                        wk1marker = i;
                        break;
                    }
                }
                var firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                var lastOfMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                var interval = firstOfMonth.getDay() + lastOfMonth.getDate();
                var numOfWeeks = Math.ceil( interval / 7);   //find number of weeks within that month
                for(let i = 1; i <= numOfWeeks; i++) {
                    this.datacollection.datasets[0].data.push(0); //initialise each week's calorie count to 0
                    this.datacollection.labels.push("Week " + i.toString());
                }
                database.collection('inputs').get().then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        if(doc.data().month == (today.getMonth() + 1) && doc.data().year == today.getFullYear()) {
                            for(let j = 0; j < this.activityName.length; j++) {
                                if(doc.data().activity == this.activityName[j]) {
                                    totalCal = (doc.data().endHour - doc.data().startHour) * 60 * this.activityRate[j];
                                    if(doc.data().date < wk1marker) {
                                        this.datacollection.datasets[0].data[0] += totalCal;
                                    }
                                    else {
                                        var weekNum = Math.floor(((doc.data().date - wk1marker)/7) + 1);
                                        this.datacollection.datasets[0].data[weekNum] += totalCal;
                                    }
                                }
                            }
                        }
                    })
                    this.renderChart(this.datacollection, this.options);
                })
            }
            else if(this.period == "Yearly") {
                this.datacollection.labels = [];
                this.datacollection.datasets[0].data = [];
                let month_label = ["Jan", "Feb", " March", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                this.datacollection.labels = month_label;
                for(let i = 0; i < month_label.length; i++) {
                    this.datacollection.datasets[0].data.push(0); //initialise each month's calorie count to 0
                }
                database.collection('inputs').get().then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        let curr_month = doc.data().month;
                        if(doc.data().year == today.getFullYear()) {
                            for(let j = 0; j < this.activityName.length; j++) {
                                if(doc.data().activity == this.activityName[j]) {
                                    totalCal = (doc.data().endHour - doc.data().startHour) * 60 * this.activityRate[j];
                                    this.datacollection.datasets[0].data[curr_month - 1] += totalCal;
                                }
                            }
                        }
                    })
                    this.renderChart(this.datacollection, this.options);
                })

            }
        }
    },

    created () {
        this.fetchActivities();
        this.fetchItems();
    }
}