/* hat-tip: https://medium.com/@immattjenkins/google-maps-in-plain-vue-6e0fc755f7d0 */
/* global google */
export default {
  name: 'GMapsMixin',
  props: {
    apiKey: { type: String, required: false }, // true
    distanceMatrixDefaultOptions: {
      type: Object,
      default: () => {
        return {
          // origins: [this.origin],
          // destinations: [this.destination],
          travelMode: 'DRIVING',
          unitSystem: 0,
          durationInTraffic: true,
          avoidHighways: false,
          avoidTolls: false
        }
      }
    }
  },
  methods: {
    createGoogleMaps () {
      return new Promise((resolve, reject) => {
        let gmapsId = 'google-maps-api'
        if (!document.getElementById(gmapsId)) {
          let gmap = document.createElement('script')
          gmap.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`
          gmap.type = 'text/javascript'
          gmap.id = gmapsId
          gmap.onload = resolve
          gmap.onerror = reject
          document.body.appendChild(gmap)
        }
      })
    },
    geolocate () {
      let vm = this
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          })
          if (vm.autocomplete) {
            vm.autocomplete.setBounds(circle.getBounds())
          }
          vm.$emit('geolocationset', circle.getBounds())
        })
      }
    },
    addressChanged () {
      let location = this.autocomplete.getPlace()
      this.$emit('locationchanged', location)
      if (this.origin) {
        let options = {
          origins: [this.origin],
          destinations: [location.formatted_address]
        }
        this.calculateDistances(options)
      }
    },
    calculateDistances (options) {
      let vm = this
      options = Object.assign(this.distanceMatrixDefaultOptions, options)
      this.$emit('distancecalculationstarted')
      var distanceService = new google.maps.DistanceMatrixService()
      distanceService
        .getDistanceMatrix(
          options,
          (result) => {
            vm.$emit('distancecalculated', result)
          })
    }
  }
}
