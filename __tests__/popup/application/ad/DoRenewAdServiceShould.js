import DoRenewAdRepository from "../../../../src/popup/framework/repository/ad/DoRenewAdRepository";
import {GetMyAdsService, GetMyAdsServiceRequest} from "../../../../src/popup/application/ad/GetMyAdsService";
import GetMyAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyAdsRepository";
import TransformToMyAdsService from "../../../../src/popup/framework/transformers/TransformToMyAdsService";
import global from "../../global";
import {DoRenewAdService, DoRenewAdServiceRequest} from "../../../../src/popup/application/ad/DoRenewAdService";
import DoLoginRepository from "../../../../src/popup/framework/repository/user/DoLoginRepository";
import DoLoginWithCookiesRepository
    from "../../../../src/popup/framework/repository/user/DoLoginWithCookiesRepository";

const assert = require("assert")

console.log("welcome! DoRenewService test")

describe('DoRenewAdService', function() {
    describe('DoRenewAdRepository', function() {
        it('should return a valid ad', async function() {
            //GIVEN
            const mockedAds = {
            }

            //WHEN
            const expectedAds = {}

            const mockDoLoginRepository = jest.fn();
            const mockDoLoginWithCurrentCookiesRepository = jest.fn();
            const mockDoRenewAdRepository = jest.fn();
            DoLoginRepository.prototype.doRenewAd = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedAds));
            DoLoginWithCookiesRepository.prototype.doRenewAd = mockDoLoginWithCurrentCookiesRepository;
            mockDoLoginWithCurrentCookiesRepository.mockReturnValue(Promise.resolve(mockedAds));
            DoRenewAdRepository.prototype.doRenewAd = mockDoRenewAdRepository;
            mockDoRenewAdRepository.mockReturnValue(Promise.resolve(mockedAds));
            const doRenewAdServiceResponse = await new DoRenewAdService(
                new DoLoginRepository(),
                new DoLoginWithCookiesRepository(),
                new DoRenewAdRepository()
            ).execute(
                new DoRenewAdServiceRequest({credentials: global.credentials, ad: global.ad})
            )
            console.log(JSON.stringify(doRenewAdServiceResponse))
            //ASSERTS
            expect(doRenewAdServiceResponse).not.toBeUndefined()
        })
    })
})
