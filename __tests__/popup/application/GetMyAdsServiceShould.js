const assert = require("assert")
import getMyAdsService from '../../../src/popup/application/GetMyAdsService'
import findAll from "../../../src/popup/framework/repository/GetMyAdsRepository"
import global from "../global.json"

console.log("welcome! GetYourAdsService test")

describe('GetMyAdsService', function() {
    describe('findAll', function() {
        it('should return a valid ad', async function() {
            const ads = await getMyAdsService(findAll, global.apiToken)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
        })
    })
})
