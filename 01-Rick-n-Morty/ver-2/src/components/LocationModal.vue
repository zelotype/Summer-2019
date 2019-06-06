<template>
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
</template>

<script>
export default {
    
}
</script>

