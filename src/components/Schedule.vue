<template>
  <div id="outerdiv">
    <b-card
      overlay
      fluid
      img-src="static/schedulebg.jpeg"
      img-alt="Card Image"
      bg-variant="dark"
      id="mycard"
    >
      <b-card-body>
        <b-card-title id="cardtitle">SCHEDULE</b-card-title>
        <br />
        <b-row class="justify-content-md-center">
          <b-col cols="2">
            <b-form-select v-model="selectedSess" class="mb-3">
              <b-form-select-option :value="['morning', 'afternoon', 'evening']"
                >All sessions</b-form-select-option
              >
              <b-form-select-option value="['morning']"
                >Morning</b-form-select-option
              >
              <b-form-select-option value="['afternoon']"
                >Afternoon</b-form-select-option
              >
              <b-form-select-option value="['evening']"
                >Evening</b-form-select-option
              >
            </b-form-select>
          </b-col>
          <b-col cols="2">
            <b-form-select v-model="selectedDuration" class="mb-3">
              <b-form-select-option :value="[45, 60]"
                >All durations</b-form-select-option
              >
              <b-form-select-option value="[45]">45 mins</b-form-select-option>
              <b-form-select-option value="[60]">60 mins</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
        <b-card-sub-title class="mb-2" id="mysubtitle"
          >iFit offers a consistent customer experience across all outlets with
          the same classes and timings</b-card-sub-title
        >
      </b-card-body>
    </b-card>
    <b-container fluid class="bv-example-row">
      <b-row id="dateheader">
        <b-col v-for="day in currentWeek" :key="day.name">
          <h4>{{ day.date }}</h4>
          <h4>{{ day.name }}</h4>
        </b-col>
      </b-row>
      <b-row v-show="showMorning">
        <h4>Morning</h4>
      </b-row>
      <b-row v-show="showMorning" class="myrow">
        <b-card-group deck class="mydeck">
          <b-card
            v-for="activity in sortClasses('morning')"
            v-bind:key="activity.cal"
          >
            <b-card-text class="myGymTitles">
              <h6>
              {{
                selectedDuration.includes(activity.duration)
                  ? activity.name
                  : ""
              }}
              </h6>
            </b-card-text>
            <b-card-text class="myGymInfo">
              <h6>
                {{
                  selectedDuration.includes(activity.duration)
                    ? activity.start + " - " + activity.end
                    : ""
                }}
              </h6>
              <h6>
                {{
                  selectedDuration.includes(activity.duration)
                    ? "Calories burnt: " + activity.cal
                    : "                   "
                }}
              </h6>
            </b-card-text>
            <template #footer v-if="selectedDuration.includes(activity.duration)">
              <b-button
                v-b-modal="'myModal' + activity.name + activity.day"
                v-if="selectedDuration.includes(activity.duration)"
              >
                What's this?
              </b-button>
              <b-modal 
                :id="'myModal' + activity.name + activity.day"
                :title="'Learn more about ' + activity.name"
                hide-footer
                :no-close-on-backdrop=true
              >
                {{ activity.information }}
              </b-modal>
            </template>
          </b-card>
        </b-card-group>
      </b-row>
      <b-row v-show="showAfternoon">
        <h4>Afternoon</h4>
      </b-row>
      <b-row v-show="showAfternoon" class="myrow">
        <b-card-group deck class="mydeck">
          <b-card
            v-for="activity in sortClasses('afternoon')"
            v-bind:key="activity.name"
          >
            <b-card-text class="myGymTitles">
              <h6>
              {{
                selectedDuration.includes(activity.duration)
                  ? activity.name
                  : ""
              }}
              </h6>
            </b-card-text>
            <b-card-text class="myGymInfo">
              <h6>
                {{
                  selectedDuration.includes(activity.duration)
                    ? activity.start + " - " + activity.end
                    : ""
                }}
              </h6>
              <h6>
                {{
                  selectedDuration.includes(activity.duration)
                    ? "Calories burnt: " + activity.cal
                    : "                   "
                }}
              </h6>
            </b-card-text>
            <template #footer v-if="selectedDuration.includes(activity.duration)">
              <b-button
                v-b-modal="'myModal' + activity.name + activity.day"
                v-if="selectedDuration.includes(activity.duration)"
              >
                What's this?
              </b-button>
              <b-modal 
                :id="'myModal' + activity.name + activity.day"
                :title="'Learn more about ' + activity.name"
                hide-footer
                :no-close-on-backdrop=true
              >
                {{ activity.information }}
              </b-modal>
            </template>
          </b-card>
        </b-card-group>
      </b-row>
      <b-row v-show="showEvening">
        <h4>Evening</h4>
      </b-row>
      <b-row v-show="showEvening" class="myrow">
        <b-card-group deck class="mydeck">
          <b-card
            v-for="activity in sortClasses('evening')"
            v-bind:key="activity.name"
          >
            <b-card-text class="myGymTitles">
              <h6>
              {{
                selectedDuration.includes(activity.duration)
                  ? activity.name
                  : ""
              }}
              </h6>
            </b-card-text>
            <b-card-text class="myGymInfo">
              <h6>
                {{
                  selectedDuration.includes(activity.duration)
                    ? activity.start + " - " + activity.end
                    : ""
                }}
              </h6>
              <h6>
                {{
                  selectedDuration.includes(activity.duration)
                    ? "Calories burnt: " + activity.cal
                    : "                   "
                }}
              </h6>
            </b-card-text>
            <template #footer v-if="selectedDuration.includes(activity.duration)">
              <b-button
                v-b-modal="'myModal' + activity.name + activity.day"
                v-if="selectedDuration.includes(activity.duration)"
              >
                What's this?
              </b-button>
              <b-modal 
                :id="'myModal' + activity.name + activity.day"
                :title="'Learn more about ' + activity.name"
                hide-footer
                :no-close-on-backdrop=true
              >
                {{ activity.information }}
              </b-modal>
            </template>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import moment from "moment";
import database from "../firebase.js";

export default {
  data() {
    return {
      currentWeek: [],
      selectedSess: ["morning", "afternoon", "evening"],
      selectedDuration: [45, 60],
      showMorning: true,
      showAfternoon: true,
      showEvening: true,
      morningClasses: [],
      afternoonClasses: [],
      eveningClasses: [],
    };
  },
  methods: {
    getCurrentWeek: function () {
      var names = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];
      moment.updateLocale("en-sg", {
        week: {
          dow: 0,
        },
      });
      let curr = moment();
      for (let i = 1; i <= 7; i++) {
        let myObj = {};
        myObj["name"] = names[i - 1];
        let first = curr.startOf("week").date() + i;
        let day = moment(curr.date(first));
        let day_raw = day.toISOString().slice(5, 10);
        let day_format = day_raw.slice(3, 5) + "/" + day_raw.slice(0, 2);
        myObj["date"] = day_format;
        this.currentWeek.push(myObj);
      }
    },
    getClasses: function () {
      database
        .collection("class")
        .where("session", "==", "morning")
        .get()
        .then((querySnapShot) => {
          let item = {};
          querySnapShot.forEach((doc) => {
            item = doc.data();
            this.morningClasses.push(item);
          });
        });
      database
        .collection("class")
        .where("session", "==", "afternoon")
        .get()
        .then((querySnapShot) => {
          let item = {};
          querySnapShot.forEach((doc) => {
            item = doc.data();
            this.afternoonClasses.push(item);
          });
        });
      database
        .collection("class")
        .where("session", "==", "evening")
        .get()
        .then((querySnapShot) => {
          let item = {};
          querySnapShot.forEach((doc) => {
            item = doc.data();
            this.eveningClasses.push(item);
          });
        });
    },
    sortClasses: function (session) {
      var copy;
      if (session == "morning") {
        copy = JSON.parse(JSON.stringify(this.morningClasses));
      } else if (session == "afternoon") {
        copy = JSON.parse(JSON.stringify(this.afternoonClasses));
      } else {
        copy = JSON.parse(JSON.stringify(this.eveningClasses));
      }

      return copy.sort((a, b) => parseFloat(a.day) - parseFloat(b.day));
    },
  },
  watch: {
    selectedSess: function (newSelection) {
      this.showMorning = newSelection.includes("morning");
      this.showAfternoon = newSelection.includes("afternoon");
      this.showEvening = newSelection.includes("evening");
    },
  },
  created() {
    this.getCurrentWeek();
    this.getClasses();
  },
};
</script>
<style scoped>
#outerdiv {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}
.bv-example-row {
  color: white;
  background-color: black;
}

card-img {
  border-radius: 0 !important;
  border-color: black;
  background-color: black;
}
#mycard {
  border-radius: 0rem;
}
#cardtitle {
  margin-top: 2em;
  color: gold;
  font-weight: bold;
}

#mysubtitle {
  color: gold !important;
  font-weight: bold;
  margin-top: 2em;
}

#dateheader {
  background-color: maroon;
}
.myGymTitles {
  color: black;
}
.myGymInfo {
  color: black;
}
.mydeck {
  width: 100%;
}
.myrow {
  display: flex;
  justify-content: center;
}
</style>