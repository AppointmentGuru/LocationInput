<template>
  <div class="gmaps" :class="{loading: loading, failed: failed}" >
    <slot>
      <input v-model='addressString' type='text' :id='id' />
    </slot>
    <pre>Arrive: {{arrivalTime}}</pre>
  </div>
</template>

<script>
/* global google */
import GMapsMixin from '../mixins/GMapsMixin'
export default {
  name: 'GmapsInput',
  mixins: [GMapsMixin],
  data () {
    return {
      location: {},
      addressString: null,
      loading: true,
      failed: false
    }
  },
  props: {
    id: {
      type: String,
      default: () => { return Math.random().toString().split('.')[1] }
    },
    // if defined, we'll find the distance from origin to desination
    origin: { type: String, default: null },
    arrivalTime: { default: null }
  },
  mounted () {
    this.createGoogleMaps()
      .then(this.initAutoComplete, this.googleMapsFailedToLoad)
  },
  methods: {
    initAutoComplete () {
      let el = document.getElementById(this.id)
      this.autocomplete = new google.maps.places.Autocomplete(el)
      this.autocomplete.addListener('place_changed', this.addressChanged)
      this.geolocate()
      this.loading = false
      this.$emit('autocompleteinited', this.autocomplete)
    },
    googleMapsFailedToLoad (result) {
      console.log(result)
      this.failed = true
      this.$emit('gmapserror', result)
      console.warn('Could not load google maps')
    }
  }
}
</script>
