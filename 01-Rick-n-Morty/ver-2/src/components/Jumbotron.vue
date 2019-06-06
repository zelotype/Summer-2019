<template>
  <div class="jumbotron jumbotron-fluid head">
    <div class="black-jumbotron">
      <!-- Text -->
      <div class="container text-head">
        <h1 class="display-4">
          <b>
            The Rick and
            Morty
          </b>
        </h1>
        <p class="lead">
          <span>
            HEY, DID YOU EVER WANT TO HOLD A
            TERRY
            FOLD?
          </span>
        </p>
        <!-- Search part -->
        <Searchpart/>
        <!-- Search part -->
      </div>
      <!-- Text -->
    </div>
  </div>
</template>

<script>
import Searchpart from './Searchpart';

export default {
  components: {
    Searchpart
  }
}
</script>






