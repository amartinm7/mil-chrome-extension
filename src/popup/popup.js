import Vue from 'vue'
import App from './App'
import Vuikit from '../dist-uikit/uikit.min.js'
import VuikitIcons from '../dist-uikit/uikit-icons.min.js'
import VuikitCss from '../dist-uikit/uikit.min.css'

// register globally
Vue.component('Vuikit', Vuikit)
Vue.component('VuikitIcons', VuikitIcons)
Vue.component('VuikitCss', VuikitCss)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

