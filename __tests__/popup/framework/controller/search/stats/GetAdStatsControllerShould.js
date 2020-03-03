import global from "../../../../global"
const assert = require("assert")
import ControllerFacadeFactoryBean from "../../../../../../src/popup/framework/ControllerFacadeFactoryBean";
import '../../../repository/using-localstorage.test.js'
import {GetAdStatsControllerRequest} from "../../../../../../src/popup/framework/controller/search/GetAdStatsController";
import {SaveStorageRepository} from "../../../../../../src/popup/framework/repository/storage/SaveStorageRepository";
SaveStorageRepository.prototype.$chromeExtensionRef = global
console.log("welcome! GetAdStatsController test")

describe('GetAdStatsController', function() {
    describe('execute', function() {
        it('should return a valid add with stats', async function() {
            const givenAd = {"adId": "337030595"}
            const expecteAd = {
                "autoRenewals": 3,
                "emailsSent": 0,
                "favorites": 0,
                "listings": 2719,
                "memberSince": undefined,
                "phoneViews": 5,
                "shares": 0,
                "views": 44
            }
            const getAdStatsControllerResponse = await ControllerFacadeFactoryBean.getAdStatsController().execute(
                new GetAdStatsControllerRequest(givenAd)
            )
            console.log(JSON.stringify(getAdStatsControllerResponse))
            //ASSERTS
            expect(getAdStatsControllerResponse.adStats).toEqual(expecteAd)
        })
    })
})
