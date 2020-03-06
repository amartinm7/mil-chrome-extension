import Vue from 'vue'
import App from './App'
import {SaveStorageRepository} from "./backend/framework/repository/storage/SaveStorageRepository";

const Vuikit = require ('../dist-uikit/uikit.min.js')
const VuikitIcons = require ('../dist-uikit/uikit-icons.min.js')
const VuikitCss = require ('../dist-uikit/uikit.min.css')

// setting up a global bus... next steps global bus vs vuex
import { EventBus } from './event-bus.js';
Vue.prototype.$eventBus = EventBus

// register globally
Vue.component('Vuikit', Vuikit)
Vue.component('VuikitIcons', VuikitIcons)
Vue.component('VuikitCss', VuikitCss)

SaveStorageRepository.prototype.$chromeExtensionRef = chrome

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

