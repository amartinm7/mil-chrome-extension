import global from "../../global";
import {
    DoRenewAdService,
    DoRenewAdServiceRequest,
    DoRenewAdServiceResponse
} from "../../../../src/popup/application/ad/DoRenewAdService";
import {DoRenewAdRepository} from "../../../../src/popup/framework/repository/ad/DoRenewAdRepository";

const assert = require("assert")

console.log("welcome! DoRenewService test")

describe('DoRenewAdService', function() {
    describe('DoRenewAdRepository', function() {
        it('should return a valid ad', async function() {
            //GIVEN
            const mockedAds = {}

            //WHEN
            const expectedAds = new DoRenewAdServiceResponse()

            const mockDoRenewAdRepository = jest.fn();
            DoRenewAdRepository.prototype.doRenewAd = mockDoRenewAdRepository;
            mockDoRenewAdRepository.mockReturnValue(Promise.resolve(mockedAds));
            const doRenewAdServiceResponse = await new DoRenewAdService(
                new DoRenewAdRepository()
            ).execute(
                new DoRenewAdServiceRequest({apiToken: global.apiToken, adId: global.ad.idanuncio, sessionId: global.sessionId})
            )
            console.log(JSON.stringify(doRenewAdServiceResponse))
            //ASSERTS
            expect(doRenewAdServiceResponse).not.toBeUndefined()
        })
    })
})
