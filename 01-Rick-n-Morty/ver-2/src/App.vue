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
  name: 'app',
  components: {
    Jumbotron,
    CharacterDetail,
    Footer
  }
}
</script>

<style>

</style>
