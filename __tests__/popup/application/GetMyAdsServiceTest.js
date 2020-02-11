const assert = require("assert")
import getMyAdsService from '../../../src/popup/application/GetMyAdsService'
import findAll from "../../../src/popup/framework/GetMyAdsRepository";

console.log("welcome! GetYourAdsService test")

describe('GetMyAdsService', function() {
    describe('findAll', function() {
        it('should return a valid ad', async function() {
            const apiToken = "<gsRPOICL_YOVUY8fntlAQzD1yVHiWLw0mL102]T@\\Y3WiL?IOk0f0luDzAF5l8ip2WP\\18LYxnwCrjR\\=WU`qO=j`ybS_V6mp399f^mVwy4ap75rOmu1<ONwP6ERND<"
            const ads = await getMyAdsService(findAll,apiToken)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
        })
    })
})
