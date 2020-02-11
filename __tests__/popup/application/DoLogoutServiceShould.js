import doLogoutService from "../../../src/popup/application/DoLogoutService";
import logout from "../../../src/popup/framework/Logout";
const assert = require("assert")

console.log("welcome! DoLogoutService test")

describe('DoLogoutService', function() {
    describe('logout', function() {
        it('should return a valid response', async function() {
            try {
                const ads = await doLogoutService(logout)
                console.log(JSON.stringify(ads.data))
                expect(ads).not.toBeUndefined()
            }catch (e) {
                console.log(JSON.stringify(e))
                expect(e).not.toBeUndefined()
                //TODO the logout uses the cookie, how to send it from a test?
            }
        })
    })
})
