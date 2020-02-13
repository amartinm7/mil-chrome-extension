const assert = require("assert")
import findAllMyFavouritesAds from '../../../../src/popup/framework/repository/GetMyFavouriteAdsRepository'
import global from "../../global.json"

console.log("welcome! GetMyFavouriteAdsRepository test")

describe('GetMyAdsRepository', function() {
    describe('findAll', function() {
        it('should return a 200', async function() {
            const apiToken = "<gsRPOICL_YOVUY8fntlAQzD1yVHiWLw0mL102]T@\\Y3WiL?IOk0f0luDzAF5l8ip2WP\\18LYxnwCrjR\\=WU`qO=j`ybS_V6mp399f^mVwy4ap75rOmu1<ONwP6ERND<"
            const ads = await findAllMyFavouritesAds(global.apiToken)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
            expect(ads.data.status).toBe("ok")
        })
    })
})
