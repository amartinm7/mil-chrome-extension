import global from "../../global";
import {
    DoLogoutController,
    DoLogoutControllerRequest, DoLogoutControllerResponse
} from "../../../../src/popup/framework/controller/DoLogoutController";
import DoLogoutRepository from "../../../../src/popup/framework/repository/user/DoLogoutRepository";

const assert = require("assert")

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
            const doLogoutControllerResponse = await new DoLogoutController().execute(
                new DoLogoutControllerRequest()
            )
            console.log(JSON.stringify(doLogoutControllerResponse))
            //ASSERTS
            expect(doLogoutControllerResponse).not.toBeUndefined()
        })
    })
})
