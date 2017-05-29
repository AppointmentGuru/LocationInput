# location-input

> Enter locations or addresses with the help of Google maps

## Installation:

```
npm install --save https://components.appointmentguru.co/location-input/location-input-{version}.tgz
```

## Example usage:

```
&lt;gmaps-autocomplete
  api-key=&#39;...&#39;
  id=&#39;gmaps-autocomplete&#39;
  @locationchanged=&#39;updateLocation&#39;
  @distancecalculated=&#39;updateDistanceInfo&#39;
  origin=&#39;Ponte City Apartments, Joe Slovo Drive, Johannesburg, Gauteng, South Africa&#39;
  :arrival-time=&#39;arrival&#39;
   &gt;
  &lt;input type=&#39;text&#39; id=&#39;gmaps-autocomplete&#39; style=&#39;width: 80%;&#39; /&gt;
&lt;/gmaps-autocomplete&gt;
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
