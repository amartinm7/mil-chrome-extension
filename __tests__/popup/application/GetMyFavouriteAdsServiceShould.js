import getMyFavouriteAdsService from "../../../src/popup/application/GetMyFavouriteAdsService"
import findAllMyFavouritesAds from "../../../src/popup/framework/repository/GetMyFavouritesAdsRepository"
import global from "../global.json"
const assert = require("assert")

console.log("welcome! GetMyFavouriteAdsService test")

describe('GetMyFavouriteAdsService', function() {
    describe('getMyFavouritesAdsRepository', function() {
        it('should return a valid ad', async function() {
            const ads = await getMyFavouriteAdsService(findAllMyFavouritesAds, global.apiToken)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
        })
    })
})