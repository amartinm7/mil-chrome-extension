import Vue from 'vue'
import App from './App'
import { store } from './store.js'
import {SaveStorageRepository} from "./backend/framework/repository/storage/SaveStorageRepository";
import './submain.js'

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

const { VUE_APP_MA_API_KEY } = process.env
const apiKey = process.env.VUE_APP_MA_API_KEY
console.log("apikey " + apiKey + VUE_APP_MA_API_KEY)

chrome.runtime.sendMessage('', {
  type: 'notification1',
  options: {
    title: 'Just wanted to notify you',
    message: 'How great it is!...',
    iconUrl: '/icon.png',
    type: 'basic'
  }
})



/*
Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

