<template>
    <div id="placeholder">
        <h3 id="stats">Height: {{ height }}cm <br> Weight: {{ weight }}kg <br> BMI: <span id="bmiVal">{{ bmi.toFixed(2) }}</span></h3>
        <b-icon-caret-down-fill id="arrow" class="h1 mb-2"></b-icon-caret-down-fill>
        <b-progress class="progressBar">
            <b-progress-bar :value="(1/3)*100" variant="warning"></b-progress-bar>
            <b-progress-bar :value="(1/3)*100" variant="success"></b-progress-bar>
            <b-progress-bar :value="(1/3)*100" variant="danger"></b-progress-bar>
        </b-progress>
        <p class="label">Underweight Healthy Overweight</p>
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
        line-height: 50px;
        position: relative;
        top: 15%;
        font-weight: bold;
    }
    #arrow {
        position: relative;
        top: 25%;
        z-index: 1;
    }
    .progressBar {
        height: 8%;
        width: 80%;
        position: relative;
        top: 20%;
        left: 10%;
    }
    .label {
        width: 80%;
        position: relative;
        font-weight: bold;
        font-size: 12px;
        top: 20%;
        left: 10%;
        padding: 0px;
        word-spacing: 40px;
    }    
</style>