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

export default {
  components: {
    Jumbotron,
    CharacterDetail,
    Footer
  },
}
</script>

<style>
body{
  background-color: black;
}
</style>
