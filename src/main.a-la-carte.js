import Vue from 'vue'

/* this setups generates "🚨  Error writing to cache" messages */
import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VAvatar from 'vuetify/es5/components/VAvatar'
import VBtn from 'vuetify/es5/components/VBtn'
import VGrid from 'vuetify/es5/components/VGrid'
import VToolbar from 'vuetify/es5/components/VToolbar'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: { VApp, VAvatar, VBtn, VGrid, VToolbar }
})

import App from './App'

/* eslint-disable no-new */
var APP = Vue.extend(App)
new APP({
  el: '#app'
})
