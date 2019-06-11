<template>
  <div>
      <h1>Component A</h1>
      <div>
          <p>My name: {{fullName}}</p>
          <p>Counter: {{counter}}</p>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
    computed:{
        ...mapGetters({
            fullname: 'name/fullname'
        }),
        ...mapState({
            counter: store => store.counter.count
        })
    }
}
</script>

<style>

</style>
