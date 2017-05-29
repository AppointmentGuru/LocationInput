# location-input

> Enter locations or addresses with the help of Google maps

## Installation:

```
npm install --save https://components.appointmentguru.co/location-input/location-input-{version}.tgz
```

## Example usage:

```
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
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
