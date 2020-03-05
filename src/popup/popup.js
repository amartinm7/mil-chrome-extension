import Vue from 'vue'
import App from './App'
import ServiceFactoryBean from "./nodejs/framework/ServiceFactoryBean";
import {SaveStorageRepository} from "./nodejs/framework/repository/storage/SaveStorageRepository";

const Vuikit = require ('../dist-uikit/uikit.min.js')
const VuikitIcons = require ('../dist-uikit/uikit-icons.min.js')
const VuikitCss = require ('../dist-uikit/uikit.min.css')

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

