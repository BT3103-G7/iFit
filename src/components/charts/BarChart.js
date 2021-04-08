import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data: function() {
        return {
            datacollection: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        backgroundColor: "",
                        data: [],
                    }, {
                        label: "",
                        backgroundColor: "",
                        data: [],
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Weekly Comparison of Net Calories Intake'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}