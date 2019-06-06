<template>
  <div>
    <form class="form-inline">
      <input
        class="searchbar"
        type="search"
        placeholder="Search what do you want! 🔍"
        aria-label="Search"
        v-model="searchText"
        id="searchForm"
      >
    </form>
    <button
      id="go-btn"
      class="searchbutton"
      type="submit"
      v-on:click="searchTextResult"
      onClick="document.getElementById('result').scrollIntoView();"
    >Go</button>
  </div>
</template>

<script>
import EventBus from '../eventBus'
export default {
  data() {
    return {
      info: [],
      searchText: ""
    };
  },
  methods:{
      recieveData(payload){
          this.info = payload
      }
  },
  mounted(){
      EventBus.$on('Information', (payload) => {
              this.recieveData(payload)
          })
  }
  
  
};
</script>
