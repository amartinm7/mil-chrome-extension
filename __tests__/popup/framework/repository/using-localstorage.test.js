// In a node environment you can mock the window.localStorage as follows:
import WindowMock from 'window-mock'
let window = new WindowMock();
global.window = {}
import 'mock-local-storage'
window.localStorage = global.localStorage

//after that you can use it import ./using-localstorage.test.js




// var Storage = require("chrome-storage")
//
// Storage.configure({
//     scope: "local", // or "sync"
// });