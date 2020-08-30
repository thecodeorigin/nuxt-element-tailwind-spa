import Vue from 'vue'

Vue.filter('upper', (val) => {
  return val.toUpperCase()
})

Vue.filter('formatDate', (val) => {
  const moment = require('moment')
  return moment(val).format('l')
})

Vue.filter('slugify', (val) => {
  // For more information, visit https://www.npmjs.com/package/slug
  const slug = require('slug')
  return slug(val)
})
