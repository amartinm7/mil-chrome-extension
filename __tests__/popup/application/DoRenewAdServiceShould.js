import doLogin from "../../../src/popup/framework/DoLogin"
import doRenewAdService from '../../../src/popup/application/DoRenewAdService'
import doRenewAd from "../../../src/popup/framework/DoRenewAd"
import global from "../global.json"
import doLoginWithCurrentCookies from "../../../src/popup/framework/DoLoginWithCurrentCookies"
const assert = require("assert")

console.log("welcome! DoRenewService test")

describe('DoRenewAdService', function() {
    describe('doRenewAd', function() {
        it('should return a valid ad', async function() {
            try {
                const ads = await doRenewAdService(doLogin, doLoginWithCurrentCookies, doRenewAd, global.credentials, global.ad)
                console.log(JSON.stringify(ads.data))
                expect(ads).not.toBeUndefined()
            } catch (e) {
                console.log(JSON.stringify(e))
            }

        })
    })
})
