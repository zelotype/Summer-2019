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

<style>
@font-face {
    font-family: classique;
    src: url(../assets/font/Cavorting.ttf);
}
.jumbotron{
    text-align: center;
    position: relative;
    padding-top: 0%;
}

.black-jumbotron{
    width: 100%; 
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
}

.head{
  padding-top: inherit;
    margin: auto;
    background-repeat: no-repeat;
    height: 1000px;
    background-image: url("https://vignette.wikia.nocookie.net/rickandmorty/images/9/98/S2e3_mount_morty_and_summer.png/revision/latest?cb=20160923231412");
    width: 100%;
}

.text-head{
    text-align: center;
    padding-top: 10%;
    color: white;
}

.display-4{
    padding-bottom: 0px;
    font-size: 100px;
    font-family: classique;
}

</style>







