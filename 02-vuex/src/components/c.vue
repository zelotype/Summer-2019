<template>
  <div>
      <h1>Component C</h1>
      <div>
          <form v-on:submit.prevent>
              <label for="" >First Name:</label>
              <input type="text" v-model="firstName"><br>
              <label for="">Last Name:</label>
              <input type="text" v-model="lastName">
              <button @click="sendData">Save</button>
          </form>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            firstName: '',
            lastName: ''
        }
    },
    methods:{
        ...mapActions({
            setName: 'name/setName'
        }),
        sendData(){
            let name = {
                firstName: this.firstName,
                lastName: this.lastName
            }
            this.setName(name)
        }
    }
}
</script>

<style>

</style>
