const assert = require("assert")
import findAll from '../../../src/popup/framework/GetMyAdsRepository'
import global from "../global.json"

console.log("welcome! GetMyAdsRepository test")

describe('GetMyAdsRepository', function() {
    describe('findAll', function() {
        it('should return a 200', async function() {
            const ads = await findAll(global.apiToken)
            console.log(JSON.stringify(ads.data))
            expect(ads).not.toBeUndefined()
            expect(ads.data.status).toBe("ok")
        })
    })
})
