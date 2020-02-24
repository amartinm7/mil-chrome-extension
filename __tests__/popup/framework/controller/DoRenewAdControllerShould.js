import global from "../../global";
import {DoRenewAdRepository} from "../../../../src/popup/framework/repository/ad/DoRenewAdRepository";
import {
    DoRenewAdController,
    DoRenewAdControllerRequest, DoRenewAdControllerResponse
} from "../../../../src/popup/framework/controller/DoRenewAdController";

const assert = require("assert")

import '../repository/using-localstorage.test.js'
import {SaveStorageRepository} from "../../../../src/popup/framework/repository/storage/SaveStorageRepository";
import ControllerFacadeFactoryBean from "../../../../src/popup/framework/ControllerFacadeFactoryBean";
SaveStorageRepository.prototype.$chromeExtensionRef = global

console.log("welcome! DoRenewAdController test")

describe('DoRenewAdController', function() {
    describe('execute', function() {
        it('should return a valid ad', async function() {
            //GIVEN
            const mockedAds = {}

            //WHEN
            const expectedAds = new DoRenewAdControllerResponse()

            const mockDoRenewAdRepository = jest.fn();
            DoRenewAdRepository.prototype.doRenewAd = mockDoRenewAdRepository;
            mockDoRenewAdRepository.mockReturnValue(Promise.resolve(mockedAds));
            const doRenewAdControllerResponse = await ControllerFacadeFactoryBean.doRenewAdController().execute(
                new DoRenewAdControllerRequest({email: global.credentials.email, password: global.credentials.password, adId: global.ad.idanuncio})
            )
            console.log(JSON.stringify(doRenewAdControllerResponse))
            //ASSERTS
            expect(doRenewAdControllerResponse).not.toBeUndefined()
        })
    })
})
