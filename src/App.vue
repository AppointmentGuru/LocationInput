<template>
  <div id="app">
    <gmaps-autocomplete
      api-key='...'
      id='gmaps-autocomplete'
      @locationchanged='updateLocation'
      @distancecalculated='updateDistanceInfo'
      origin='Ponte City Apartments, Joe Slovo Drive, Johannesburg, Gauteng, South Africa'
      :arrival-time='arrival'
       >
      <input type='text' id='gmaps-autocomplete' style='width: 80%;' />
    </gmaps-autocomplete>
    <h4>Distance Info:</h4>
    <pre>{{distanceInfo}}</pre>
    <h4>Location</h4>
    <pre>{{location}}</pre>
  </div>
</template>

<script>
import GmapsAutocomplete from './components/GmapsAutocomplete'

export default {
  name: 'app',
  components: {
    GmapsAutocomplete
  },
  data () {
    return {
      location: {},
      distanceInfo: {},
      arrival: new Date(1496037600 * 1000)
    }
  },
  methods: {
    updateLocation (location) {
      this.location = location
    },
    updateDistanceInfo (result) {
      this.distanceInfo = result
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
