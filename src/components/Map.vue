<template>
    <div id="placeholder">
        <div id="bg"></div>
        <h2 id="header">You are one step closer to making healthy happen. <br> Find a local gym now!</h2>
        <GmapMap id="map" ref="mapRef"
            :center="{lat:1.3118078441306777, lng:103.90580352412425}"
            :zoom="13"
            map-type-id="roadmap"
            style="width: 60%; height: 600px">
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.center"
                @mouseover="showDetails()"
                />    
        </GmapMap>
        <div id="searchPlaceholder">
            <b-form-input id="form" placeholder="Search" v-model.lazy="searchPhrase"></b-form-input>
            <ul v-if="match && !isEmpty(this.searchPhrase)">
                <li v-for="match in this.matches" :key="match.key" v-on:click="zoomToPoint(match)" class="points">
                    Address: {{ match.address }},
                    (S) {{ match.postalCode }} <br>
                    Contact: {{ match.contact }}
                </li>
            </ul>
            <ul v-if="!match">
                <li>No results</li>
            </ul>
        </div>
    </div>
</template>
<script>
const marineParade = {lat: 1.3016662544132742, lng: 103.90687848469861};
const tanjongKatong = {lat: 1.3150365901083318, lng: 103.8946531102904};
const kembangan = {lat: 1.3195513184006602, lng: 103.91163927259117};

export default {
    data() {
        return {
            searchPhrase: "",
            match: true,
            matches: [],
            markers: [
                {
                    position: marineParade,
                    address: "Blk 86, Marine Parade Central GF",
                    postalCode: "440086",
                    openingHours: "6am - 12am",
                    contact: "61234567"
                },
                {
                    position: tanjongKatong,
                    address: "11 Tanjong Katong Rd, 2F OneKM Mall",
                    postalCode: "437157",
                    openingHours: "6am - 12am",
                    contact: "61234568"
                },
                {
                    position: kembangan,
                    address: "398 Changi Rd, #01-03",
                    postalCode: "419845",
                    openingHours: "6am - 12am",
                    contact: "61234569"
                },
            ],
        }
    },
    methods: {
        showDetails: function() {
            // show details of gym on mouse hover
        },
        zoomToPoint: function(point) {
            this.$refs.mapRef.$mapPromise.then((map) => {
                map.panTo({lat: point.position.lat, lng: point.position.lng});
                map.setZoom(16);
            });
        },
        isEmpty: function(str) {
            return str.length === 0;
        },
        
    },
    watch: {
        searchPhrase: function() {
            this.matches = [];
            for (let i = 0; i < this.markers.length; i++) {
                if (this.markers[i].address.toLowerCase().includes(this.searchPhrase.toLowerCase()) 
                    || this.markers[i].postalCode.toLowerCase().includes(this.searchPhrase.toLowerCase())) {
                    
                    this.matches.push(this.markers[i]);
                }
            }
            if (this.matches.length != 0) {
                this.match = true;
            } else {
                this.match = false;
            }
        }
    }
}
</script>
<style scoped>
    #placeholder {
        padding: 0;
    }
    #header {
        width: 100%;
        height: 20%;
        background-color: #8B0000;
        color: white;
        font-weight: bold;
        font-family: 'Lucida Sans';
        padding: 1%;
    }
    #map {
        float: right;
    }
    #form {
        max-width: 30%;
        margin-left: 5%;
    }
    ul {
        width: 30%;
        margin-left: 5%;
        margin-top: 1%;
        color: white;
        list-style: none;
        padding: 0;
        max-height: 500px;
    }
    li {
        margin-left: 0;
        margin-top: 2px;
        padding: 8px;
        width: 100%;
        border: 1px solid rgb(158, 158, 156);
        background-color: grey;
    }
    .points:hover {
        cursor: pointer;
    }
    #bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 1;
        z-index: -1;
    }
</style>