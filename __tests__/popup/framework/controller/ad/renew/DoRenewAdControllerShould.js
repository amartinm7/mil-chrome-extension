import {DoRenewAdRepository} from "../../../../../../src/popup/backend/framework/repository/ad/DoRenewAdRepository";
import ControllerFacadeFactoryBean from "../../../../../../src/popup/backend/framework/ControllerFacadeFactoryBean";
import {
    DoRenewAdControllerRequest,
    DoRenewAdControllerResponse
} from "../../../../../../src/popup/backend/framework/controller/ad/renew/DoRenewAdController";
import {DoLoginWithBothService} from "../../../../../../src/popup/backend/application/user/DoLoginWithBothService";

const assert = require("assert")

console.log("welcome! DoRenewAdController test")

describe('DoRenewAdController', function() {
    describe('execute', function() {
        it('should return a valid ad', async function() {

            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }
            //GIVEN
            const mockedAds = {}

            //WHEN
            const expectedAds = new DoRenewAdControllerResponse()

            //MOCK SERVICES AND REPOSITORY
            const mockDoLoginWithBothService = jest.fn();
            DoLoginWithBothService.prototype.execute = mockDoLoginWithBothService
            mockDoLoginWithBothService.mockReturnValue(Promise.resolve({
                current: {
                    session: {
                        apiToken: "anyToken"
                    }
                }
            }));
            const mockDoRenewAdRepository = jest.fn();
            DoRenewAdRepository.prototype.doRenewAd = mockDoRenewAdRepository;
            mockDoRenewAdRepository.mockReturnValue(Promise.resolve(mockedAds));
            const doRenewAdControllerResponse = await ControllerFacadeFactoryBean.doRenewAdController().execute(
                new DoRenewAdControllerRequest(givenCredentials)
            )
            console.log(JSON.stringify(doRenewAdControllerResponse))
            //ASSERTS
            expect(doRenewAdControllerResponse).not.toBeUndefined()
        })
    })
})
