import {
    DoLogoutControllerRequest,
    DoLogoutControllerResponse
} from "../../../../../src/popup/backend/framework/controller/user/DoLogoutController";

const assert = require("assert")
import ControllerFacadeFactoryBean from "../../../../../src/popup/backend/framework/ControllerFacadeFactoryBean";
import {DoLogoutRepository} from "../../../../../src/popup/backend/framework/repository/user/DoLogoutRepository";

console.log("welcome! DoLogoutController test")

describe('DoLogoutController', function() {
    describe('execute', function() {
        it('should return a valid ad', async function() {
            //GIVEN
            const mockedAds = {}

            //WHEN
            const expectedAds = new DoLogoutControllerResponse()

            const mockDoLogoutRepository = jest.fn();
            DoLogoutRepository.prototype.doLogout = mockDoLogoutRepository;
            mockDoLogoutRepository.mockReturnValue(Promise.resolve(mockedAds));
            const doLogoutControllerResponse = await ControllerFacadeFactoryBean.doLogoutController().execute(
                new DoLogoutControllerRequest()
            )
            console.log(JSON.stringify(doLogoutControllerResponse))
            //ASSERTS
            expect(doLogoutControllerResponse).not.toBeUndefined()
        })
    })
})
