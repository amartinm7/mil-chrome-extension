const assert = require("assert")
import ControllerFacadeFactoryBean from "../../../../../../src/popup/backend/framework/ControllerFacadeFactoryBean";
import '../../../repository/using-localstorage.test.js'
import {GetAdStatsControllerRequest} from "../../../../../../src/popup/backend/framework/controller/ad/stats/GetAdStatsController";
import RepositoryFactoryBean from "../../../../../../src/popup/backend/framework/RepositoryFactoryBean";
import {GetAdStatsRepository} from "../../../../../../src/popup/backend/framework/repository/ad/GetAdStatsRepository";

console.log("welcome! GetAdStatsController test")

describe('GetAdStatsController', function() {
    describe('execute', function() {
        it('should return a valid add with stats', async function() {
            const givenAd = "337030595"
            const expecteAd = {
                "autoRenewals": 227,
                "emailsSent": 0,
                "favorites": 10,
                "listings": 171527,
                "memberSince": undefined,
                "phoneViews": 29,
                "shares": 0,
                "views": 666
            }
            //mock repository
            const mockedAds = require("./statsResponse.json")
            const mockGetAdStatsRepository = jest.fn();
            GetAdStatsRepository.prototype.findStatsByAdId = mockGetAdStatsRepository;
            mockGetAdStatsRepository.mockReturnValue(Promise.resolve({"data": mockedAds}));

            const getAdStatsControllerResponse = await ControllerFacadeFactoryBean.getAdStatsController().execute(
                new GetAdStatsControllerRequest(givenAd)
            )
            console.log(JSON.stringify(getAdStatsControllerResponse))
            //ASSERTS
            expect(getAdStatsControllerResponse.adStats).toEqual(expecteAd)
        })
    })
})
