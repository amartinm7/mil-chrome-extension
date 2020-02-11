import getMyFavouriteAdsService from "../../../src/popup/application/GetMyFavouriteAdsService";
import findAllMyFavouritesAds from "../../../src/popup/framework/GetMyFavouritesAdsRepository";

const assert = require("assert")

console.log("welcome! GetMyFavouriteAdsService test")

describe('GetMyFavouriteAdsService', function() {
    describe('getMyFavouritesAdsRepository', function() {
        it('should return a valid ad', async function() {
            const apiToken = "<gsRPOICL_YOVUY8fntlAQzD1yVHiWLw0mL102]T@\\Y3WiL?IOk0f0luDzAF5l8ip2WP\\18LYxnwCrjR\\=WU`qO=j`ybS_V6mp399f^mVwy4ap75rOmu1<ONwP6ERND<"
            const ads = await getMyFavouriteAdsService(findAllMyFavouritesAds,apiToken)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
        })
    })
})