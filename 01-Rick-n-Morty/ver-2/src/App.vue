<template>
  <div id="app">
    <Jumbotron/>
    <CharacterDetail/>
    <Footer/>
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron'
import CharacterDetail from './components/CharacterDetail'
import Footer from './components/Footer'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Jumbotron,
    CharacterDetail,
    Footer
  },
  data() {
    return {
      info: [],
      info_location: [],
      searchText: ""
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => (this.info = response.data.results));
  },
  computed: {
    searchTextResult: function() {
      return this.info.filter(character => {
        let searchText = this.searchText.toLowerCase();

        let isMathchTitle = character.name.toLowerCase().includes(searchText);

        return isMathchTitle;
      });
    }
  }
}
</script>

<style>

</style>
