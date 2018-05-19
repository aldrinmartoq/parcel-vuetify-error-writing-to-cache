import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import App from './App'

/* eslint-disable no-new */
var APP = Vue.extend(App)
new APP({
  el: '#app'
})
