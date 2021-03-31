<template>
  <div id="row">
    <div id="left">
      <h1>Leaderboard</h1>
      <table>
        <colgroup>
          <col class="rank"/>
          <col class="col"/>
          <col class="col"/>
          <col class="col"/>
        </colgroup>
        <tr>
          <th>RANK</th>
          <th>CALORIES BURNT (kcal/week)</th>
          <th>NAME</th>
          <th>CONNECT</th>
        </tr>
        <tr v-for="(mem, index) in members" :key="index">
          <td>{{"#" + (index + 1)}}</td>
          <td>{{mem.cal}}</td>
          <td>{{mem.user}}</td>
          <td>{{mem.tele}}</td>
        </tr>
      </table>
    </div>

    <div id="right">
      <img src="../assets/lbimage.png" alt="Gym Image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {cal: "533", user: "Peter", tele: "@petepete" },
        {cal: "433", user: "May", tele: "@mayyam" }
      ]
    };
  },
};
</script>

<style scoped>
#row {
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}
#left {
  float: left;
  width: 70%;
  height: 100%;
}

#right {
  float: left;
  width: 30%;
  height: 100%;
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
  height: 100%;
  width: 100%;
}
table {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: separate;
  border-spacing: 0 0.5em;
  table-layout: fixed;
}
.rank {
  width: 10%;
}
.col {
  width: 25%;
}
th {
  background-color: maroon;
  color: white;
}
td {
  background-color: white;
}
</style>