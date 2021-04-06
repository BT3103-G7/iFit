<template>
    <div id="placeholder">
        <h5 id="stats">Height: {{ height }}cm <br> Weight: {{ weight }}kg <br> BMI: <span id="bmiVal">{{ bmi.toFixed(2) }}</span></h5>
        <div id="chart">
            <b-icon-caret-down-fill id="arrow" class="h4 mb-2"></b-icon-caret-down-fill>
            <b-progress class="progressBar">
                <b-progress-bar :value="(1/3)*100" variant="warning"></b-progress-bar>
                <b-progress-bar :value="(1/3)*100" variant="success"></b-progress-bar>
                <b-progress-bar :value="(1/3)*100" variant="danger"></b-progress-bar>
            </b-progress>
            <div id="labels">
                <p class="label">Underweight</p>
                <p class="label">Healthy</p>
                <p class="label">Overweight</p>    
            </div>
        </div>
        <div id="buttons">
            <b-button variant="info" class="button" to="calsout">Cals Out</b-button>
            <b-button variant="outline-info" class="button">Cals In</b-button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            weight: 80,
            height: 180,
            bmi: 0,
        }
    },
    methods: {
        getBmi: function() {
            this.bmi = (this.weight) / Math.pow(this.height/100, 2);
        },
        adjustUi: function() {
            if (this.bmi < 18.5) {
                document.getElementById("arrow").style.right = '100px';
                document.getElementById("bmiVal").style.color = '#f0ad4e';
            } else if (this.bmi > 25) {
                document.getElementById("arrow").style.right = '-100px';
                document.getElementById("bmiVal").style.color = '#d9534f';
            } else {
                document.getElementById("arrow").style.right = '0';
                document.getElementById("bmiVal").style.color = '#5cb85c';
            }
            console.log(document.getElementById("arrow"));
        }
    },
    mounted() {
        this.getBmi();
        this.adjustUi();
    }
}
</script>
<style scoped>
    body {
        font-family: 'Lucida Sans';
    }
    #placeholder {
        width: 20%;
        height: 90%;
        background-color: white;
        border-radius: 10px;
        margin: 2% 12% 0 0;
        float: right;
    }
    #stats {
        margin-top: 2%;
        margin-bottom: 0;
        padding: 8% 0 0 0;
        position: relative;
        font-weight: bold;
        height: 40%;
    }
    #chart {
        width: 100%;
        height: 30%;
    }
    #arrow {
        position: relative;
        top: 20%;
        z-index: 1;
    }
    .progressBar {
        height: 20%;
        width: 80%;
        position: relative;
        left: 10%;
    }
    #labels {
        width: 90%;
        left: 5%;
        position: relative;
    }
    .label {
        font-weight: bold;
        font-size: 10px;
        width: 30%;
        display: inline-block;
        margin: 0 0.1% 0 0.1%;
    }    
    #buttons {
        width: 100%;
        height: 20%;
        padding: 3% 1% 3% 1%;
    }
    .button {
        width: 30%;
        margin: 0 2% 0 2%;
    }
</style>