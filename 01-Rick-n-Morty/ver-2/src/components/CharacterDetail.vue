<template>
  <div class="container-fluid" id="result">
    <h1 v-if="searchTextResult.length != 0">Character</h1>
    <div v-if="searchTextResult.length > 0">

      <div class="row mx-auto">
        <div
          class="col-lg-3 col-md-12 col-sm-12 character-card-set"
          v-for="character in searchTextResult"
          :key="character.id"
        >
          <div class="card my-3 character-card">
            <!-- Character image -->
            <img :src="character.image" class="card-img-top img-fluid avatar">

            <!-- Character Information -->
            <div class="card-body">
              <div class="name">
                <h5 class="card-title">{{character.name}}</h5>
                <!-- Status bar -->
                <div
                  class="status my-auto"
                  :style="{'background-color': (character.status == 'Alive') ? 'yellowgreen' : (character.status == 'unknown') ? 'gray' : 'red' }"
                >{{ character.status }}</div>
              </div>
              <h6 class="card-subtitle mb-2 text-muted">
                id: {{ character.id }} -
                {{ calculate_year(character.created) }}
              </h6>
              <div class="avatar-line"></div>
              <p class="card-text">
                <b>SPECIES:</b>
                {{ character.species }}
                <br>
                <b>GENDER:</b>
                {{ character.gender }}
                <br>
                <b>ORIGIN:</b>
                {{ character.origin.name }}
                <br>
                <!-- Location button -->
                <b>LAST LOCATION:</b>
                <button
                  class="location_detail"
                  type="button"
                  data-toggle="modal"
                  data-target="#location-modal"
                  v-if="character.location.url != '' "
                  v-on:click="findLocation(character.location.url)"
                >{{ character.location.name }}</button>
                <button class="unknown_location" v-else>{{ character.location.name }}</button>
              </p>
            </div>
            <!-- Character Information -->
          </div>
          <!-- Location Modal -->
          <div
            class="modal fade"
            id="location-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- Location title -->
                  <h5 class="modal-title" id="exampleModalLongTitle">{{ info_location.name }}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <!-- Location Information -->
                <div class="modal-body">
                  <b>Type:</b>
                  {{ info_location.type }}
                  <br>
                  <b>Dimension:</b>
                  {{ info_location.dimension }}
                </div>
                <!-- Location Information -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary close-btn"
                    data-dismiss="modal"
                  >Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../main";
import axios from "axios";
export default {
  data() {
    return {
      info_location: [],
      info: [],
      searchText: ""
    };
  },
  mounted() {
    EventBus.$on("search", searchText => {
      alert("lol");
      this.searchText = searchText;
    });
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => (this.info = response.data.results));
  },
  computed: {
    searchTextResult() {
      let arr = [];
      arr = this.info.filter(character => {
        const searchText = this.searchText.toLowerCase();

        let isMathchTitle = character.name.toLowerCase().includes(searchText);

        return isMathchTitle;
      });
      return arr;
    }
  },
  methods: {
    calculate_year: function(data) {
      let created_year = Number(data.slice(0, 4));
      let year = 2019;
      let distance = year - created_year;
      let text = "";
      if (distance == 0) {
        text = "created this year";
      } else if (distance == 1) {
        text = "created a year ago";
      } else {
        text = "created " + distance.toString() + " years ago";
      }
      return text;
    },
    findLocation: function(url) {
      this.axios
        .get(url)
        .then(response => (this.info_location = response.data));
    }
  }
};
</script>


<style scoped>
#result{
  background-color: black;  
}
.card{
    border-radius: 30px;
    background-color: white;
    color: black;
}
.avatar{
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    padding-bottom: 10px;
    height: 300px !important;
    width: 300px;
}

.character{
    position: relative;
}

.avatar-line{
    border-bottom: 1px solid #EAECEE;
    margin-bottom: 5%;
}

.status{
    border: 1px;
    border-radius: 50px;
    text-align: center;
    color: white;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
}

.name{
    display: flex;
    justify-content: space-between;
}

.location_detail{
    border: 0;
    background-color: transparent;

}
.location_detail:hover{
    background-color: #F4D03F;
    border: 0;
    border-radius: 50px;
}

.modal-header{
    background-color: #F4D03F;
}

h1{
    font-family: classique;
    color: white;
    font-size: 100px;
    text-align: center;
    padding: 30px;
}

.unknown_location{
    border: none;
    background-color: transparent;
}

.card-title{
    font-family: classique;
    font-size: 30px;
    color: black;
    margin-bottom: 0;
}

.card-body{
    padding-top: 0%;
}

.card-subtitle{
    margin-top:1%;
}

.close-btn{
    background-color: red;
    border: none;
}

.lead{
    text-align: center;
    margin-top: 5px;
}

.character-card{
    height:600px;
}

.character-card-set{
    padding-top:15px;
}

.footer-copyright{
    color: white;
}
</style>


