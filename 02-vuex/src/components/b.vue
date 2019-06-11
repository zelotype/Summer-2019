<template>
  <div>
    <h1>Component B</h1>
    <div>
      <button>Count it!</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions({
            increaseCounter: 'counter/increaseCounter'
        })
    }
};
</script>

<style>
</style>
