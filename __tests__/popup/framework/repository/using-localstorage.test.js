// In a node environment you can mock the window.localStorage as follows:
import WindowMock from 'window-mock'
const window = new WindowMock();
global.window = {}
import 'mock-local-storage'
window.localStorage = global.localStorage
window.global = global
//after that you can use it import ./using-localstorage.test.js

// var Storage = require("chrome-storage")
//
// Storage.configure({
//     scope: "local", // or "sync"
// });

describe('LoadPageController', function() {
    describe('execute', function() {
        it('should return a true', async function() {
            console.log("void test")
        })
    })
})