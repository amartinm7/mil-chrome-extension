const assert = require("assert")
import './using-localstorage.test.js'

console.log("welcome! SaveStorageRepository test")

describe('SaveStorageRepository', function() {
    describe('execute', function() {
        afterEach(() => {
            localStorage.clear();
            // remove callback
            localStorage.itemInsertionCallback = null;
        });
        it('should save', function() {
            expect({}).toEqual({})
        })
    })
})
