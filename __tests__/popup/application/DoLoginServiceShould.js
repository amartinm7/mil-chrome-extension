import doLoginService from "../../../src/popup/application/DoLoginService"
import global from "../global"
import doLogin from "../../../src/popup/framework/DoLogin";

const assert = require("assert")

console.log("welcome! DoLoginService test")

describe('DoLoginService', function() {
    describe('login', function() {
        it('should return a valid response', async function() {
            const ads = await doLoginService(doLogin, global.credentials)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
        })
    })
})
