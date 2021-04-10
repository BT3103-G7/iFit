<template>
  <div id="row">
    <div id="left">
      <h1>Leaderboard</h1>
      <div>
        <v-table
          :data="sortMembers()"
          :currentPage.sync="currentPage"
          :pageSize="15"
          @totalPagesChanged="totalPages = $event"
          :hideSinglePage="true"
        >
          <colgroup>
            <col class="rank" />
            <col class="col" />
            <col class="col" />
            <col class="col" />
          </colgroup>
          <thead slot="head">
            <th>RANK</th>
            <th>CALORIES BURNT (kcal/week)</th>
            <th>NAME</th>
            <th>CONNECT</th>
          </thead>
          <tbody slot="body" slot-scope="{ displayData }">
            <tr v-for="(mem, index) in displayData" :key="index">
              <td>{{ "#" + (currentPage * 5 - 5 + index + 1) }}</td>
              <td>{{ mem.cal }}</td>
              <td>{{ mem.user }}</td>
              <td>{{ mem.tele }}</td>
            </tr>
          </tbody>
        </v-table>
        <smart-pagination
          :currentPage.sync="currentPage"
          :totalPages="totalPages"
          id="mypagination"
        />
      </div>
    </div>

    <div id="right">
      <div id="myimg"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import database from "../firebase.js";

export default {
  data() {
    return {
      members: [],
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    getRate: function (calories, dateData) {
      var current = moment();
      var weeks = current.week() - dateData.week();
      if (weeks == 0) {
        return calories;
      } else {
        return calories / weeks;
      }
    },
    fetchItems: function () {
      database
        .collection("user")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            var results = doc.data();
            if (results["valid"]) {
              var userData = {};
              var dateData = moment(
                results["startYear"] +
                  "-" +
                  results["startMonth"] +
                  "-" +
                  results["startDate"]
              );
              userData["cal"] = this.getRate(results["burnt"], dateData);
              userData["tele"] = results["tele"];
              userData["user"] = results["name"];
              userData["show"] = results["showTele"];
              this.members.push(userData);
            }
          });
        });
    },
    sortMembers: function () {
      var copy = JSON.parse(JSON.stringify(this.members));
      return copy.sort((a, b) => parseFloat(b.cal) - parseFloat(a.cal));
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
#row {
  background-color: black;
  width: 100%;
  position: absolute;
  top: 0;
  min-height: 100%;
}
#left {
  float: left;
  width: 70%;
  height: auto;
  overflow-x: auto;
  overflow-y: auto;
}

#right {
  float: left;
  width: 30%;
}
#myimg {
  display: block;
  width: 30%;
  position: absolute;
  background-image: url("../assets/lbimage.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
}
/* Clear floats after the columns */
#row:after {
  content: "";
  display: table;
  clear: both;
}
h1 {
  text-align: left;
  color: gold;
  padding-left: 1em;
  padding-top: 2em;
  padding-bottom: 1em;
}
img {
  min-height: 100%;
  width: auto;
}
table {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: separate;
  border-spacing: 0 0.4em;
}
.rank {
  width: 10%;
}
.col {
  width: 25%;
}
th {
  background-color: #660022;
  color: white;
  width: 15%;
}
td {
  background-color: white;
}
#mypagination {
  margin: auto;
  width: 20%;
}
</style>