const assert = require("assert")
import './using-localstorage.test.js'
import BrowserRepository from "../../../../src/popup/framework/repository/storage/SaveStorageRepository"

console.log("welcome! SaveStorageRepository test")

describe('BrowserRepository', function() {
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
