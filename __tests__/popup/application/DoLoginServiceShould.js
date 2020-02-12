import doLoginService from "../../../src/popup/application/DoLoginService"
import login from "../../../src/popup/framework/Login"
import global from "../global"

const assert = require("assert")

console.log("welcome! DoLoginService test")

describe('DoLoginService', function() {
    describe('login', function() {
        it('should return a valid response', async function() {
            const credentials = {email: global.email, password: global.password}
            const ads = await doLoginService(login, credentials)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
        })
    })
})
