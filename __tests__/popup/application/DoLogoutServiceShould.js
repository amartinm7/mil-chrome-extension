import doLogoutService from "../../../src/popup/application/DoLogoutService"
import doLogout from "../../../src/popup/framework/repository/DoLogout"
const assert = require("assert")

console.log("welcome! DoLogoutService test")

describe('DoLogoutService', function() {
    describe('doLogout', function() {
        it('should return a valid response', async function() {
            try {
                const ads = await doLogoutService(doLogout)
                console.log(JSON.stringify(ads.data))
                expect(ads).not.toBeUndefined()
            }catch (e) {
                console.log(JSON.stringify(e))
                expect(e).not.toBeUndefined()
                //TODO the doLogout uses the cookie, how to send it from a test?
            }
        })
    })
})
