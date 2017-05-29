var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyBzHqQ8CnLCbmaqISND23O5WI_WEQCw22k"'
})
