import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
import Sortable from 'vue-sortable'

// Use resource package
Vue.use(Resource)
Vue.use(Sortable)

// Filter for cutting off strings that are too long.
Vue.filter('truncate', function (value) {
  var length = 60
  if (value.length <= length) {
    return value
  } else {
    return value.substring(0, length) + '...'
  }
})

// Filter that takes an image url and creates a CSS style.
Vue.filter('setAsBackground', function (value) {
  if (value && value !== 'self' && value !== 'nsfw') {
    return 'background-image: url(' + value + ')'
  } else {
    return 'background-image: url(assets/img/placeholder.png)'
  }
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})
