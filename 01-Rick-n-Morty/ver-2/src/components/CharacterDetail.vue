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
                <button type="button" class="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

