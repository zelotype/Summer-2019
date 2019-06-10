<template>
  <div class="jumbotron jumbotron-fluid head" style="padding-top:inherit;">
    <div class="black-jumbotron">
      <!-- Text -->
      <div class="container text-head">
        <h1 class="display-4" style="font-size: 100px;">
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
        <div>
          <form class="form-inline" v-on:submit.prevent="emitMethod">
            <input
              class="searchbar"
              type="search"
              placeholder="Search what do you want! 🔍"
              aria-label="Search"
              v-model="searchText"
              id="searchForm"
              v-on:keyUp.enter="emitMethod"
            >
          </form>
          <button
            id="go-btn"
            class="searchbutton"
            type="submit"
            onClick="document.getElementById('result').scrollIntoView();"
          >Go</button>
        </div>
        <!-- Search part -->
      </div>
      <!-- Text -->
    </div>
  </div>
</template>

<script>
import EventBus from '../main'
export default {
  data(){
    return{
      searchText: "",
      info: [],
    };
  },
  methods: {
    emitMethod(){
      alert('run method')
      EventBus.$emit('search', this.searchText);
    }
  },
  
};
</script>

<style>
@font-face {
  font-family: classique;
  src: url(../assets/font/Cavorting.ttf);
}
.jumbotron {
  text-align: center;
  position: relative;
  padding-top: 0%;
}

.black-jumbotron {
  /* padding-top: 0%; */
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
}

.head {
  padding-top: inherit;
  margin: auto;
  background-repeat: no-repeat;
  height: 1000px;
  background-image: url("https://vignette.wikia.nocookie.net/rickandmorty/images/9/98/S2e3_mount_morty_and_summer.png/revision/latest?cb=20160923231412");
  width: 100%;
}

.text-head {
  text-align: center;
  padding-top: 10%;
  color: white;
}

.display-4 {
  padding-bottom: 0px;
  font-size: 100px;
  font-family: classique;
}

.searchbar{
    width: 70%;
    padding: 12px 24px;
    transition: transform 250ms ease-in-out;
    line-height: 18px;
    border: 1px solid;
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid white;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    background: transparent;
    text-align: center;
    color: white;
    margin: auto;
    margin-top: 2%;
    font-size: 28px;
}
.searchbar:hover, :focus{
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid white;
    border-radius: 0;
    text-align: left;
}

::placeholder{
    color: white;
    opacity: 0.8;
    font-size: 18px;
}

.searchbutton{
    font-size: 20px;
    margin-top: 3% !important;
    border: 1px solid yellowgreen;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    border-radius: 50px;
    background: yellowgreen;
    margin: 10px;
    width: 200px;
    height: 50px;
    text-align: center;
    background-position: left;
    display: inline-block;
}
</style>







