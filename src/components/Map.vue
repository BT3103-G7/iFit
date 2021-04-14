<template>
    <div id="placeholder">
        <div id="bg"></div>
        <h2 id="header">YOU ARE ONE STEP CLOSER TO MAKING HEALTHY HAPPEN. <br> FIND A LOCAL GYM NOW!</h2>
        <GmapMap id="map" ref="mapRef"
            :center="{lat:1.3619235244187997, lng:103.80524984383372}"
            :zoom="11.5"
            map-type-id="roadmap"
            style="width: 60%; height: 68vh;">
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
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
            <ul v-if="isEmpty(this.searchPhrase)">
                <li>Enter a search phrase to find a gym near you! <br> Click search results to zoom in on the map.</li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import database from '../firebase'
import Footer from './Footer.vue'

export default {
    components: {
        Footer
    },
    data() {
        return {
            searchPhrase: "",
            match: true,
            matches: [],
            markers: [],
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
        fetchLocations: function() {
            database.collection("locations").get().then((querySnapShot) => {
                let marker = {};
                let position = {};
                querySnapShot.forEach((doc) => {
                    position.lat = doc.data().lat;
                    position.lng = doc.data().lng;
                    marker = doc.data();
                    marker.position = position;
                    delete marker['lat'];
                    delete marker['lng'];
                    this.markers.push(marker);
                    marker = {};
                    position = {};
                });
            });
        }
        
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
    },
    created() {
        this.fetchLocations();
    }
}
</script>
<style scoped>
    #placeholder {
        padding: 0;
        height: 100%;
    }
    #header {
        width: 100%;
        height: 20%;
        background-color: #8B0000;
        color: white;
        font-weight: bold;
        font-family: 'Fjalla One', 'Lucida Sans';
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
        max-height: 50vh;
        overflow-y: scroll;
        font-family: 'Rubik', 'sans-serif';
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
    /*scrollbar style from https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp*/
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
    Footer {
        position: absolute;
        top: 100%;
        width: 100%;
    }
</style>