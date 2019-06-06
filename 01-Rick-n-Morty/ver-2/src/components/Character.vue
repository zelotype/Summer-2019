<template>
  <div class="container-fluid" id="result">
    <h1 v-if="searchTextResult.length != 0">Character</h1>
    <div class="row mx-auto">
      <div
        class="col-lg-3 col-md-12 col-sm-12 character-card-set"
        :v-for="character in searchTextResult"
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
        <LocationModal/>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventBus'
import LocationModal from "./LocationModal"
export default {
  data() {
    return {
      info: [],
      searchText: ""
    };
  },
  methods: {
      sendData(payload) {
          payload = this.info
          EventBus.$emit('Information', payload)
      }
  },
  components: {
    LocationModal
  },
  computed: {
    searchTextResult: function() {
      return this.info.filter(character => {
        let searchText = this.searchText.toLowerCase();

        let isMathchTitle = character.name.toLowerCase().includes(searchText);

        return isMathchTitle;
      });
    }
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => (this.info = response.data.results))
      .catch(error => console.log("Fetch data error"));
  }
};
</script>

