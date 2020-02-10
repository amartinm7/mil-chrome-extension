import Vue from 'vue'
import App from './App'

const Vuikit = require ('../dist-uikit/uikit.min.js')
const VuikitIcons = require ('../dist-uikit/uikit-icons.min.js')
const VuikitCss = require ('../dist-uikit/uikit.min.css')

// register globally
Vue.component('Vuikit', Vuikit)
Vue.component('VuikitIcons', VuikitIcons)
Vue.component('VuikitCss', VuikitCss)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

