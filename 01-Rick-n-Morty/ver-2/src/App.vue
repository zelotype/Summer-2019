<template>
  <div id="app">
    <Jumbotron/>
    <Character/>
    <Footer/>
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron'
import Character from './components/Character'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Jumbotron,
    Character,
    Footer
  }
}
</script>

<style>

</style>
