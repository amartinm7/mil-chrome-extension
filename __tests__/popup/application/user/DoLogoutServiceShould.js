import global from "../../global"
import DoLoginRepository from "../../../../src/popup/framework/repository/user/DoLoginRepository"
import {
    DoLogoutService,
    DoLogoutServiceRequest,
    DoLogoutServiceResponse
} from "../../../../src/popup/application/user/DoLogoutService"
import DoLogoutRepository from "../../../../src/popup/framework/repository/user/DoLogoutRepository"
const assert = require("assert")

console.log("welcome! DoLogoutService test")
jest.mock("../../../../src/popup/framework/repository/user/DoLogoutRepository")

describe('DoLogoutService', function() {
    describe('DoLogoutRepository', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const mockedAds = {}
            //WHEN
            const expected = new DoLogoutServiceResponse({})
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedAds))
            const doLogoutResponse = await new DoLogoutService(
                new DoLogoutRepository()
            ).execute(
                new DoLogoutServiceRequest({apiToken: global.apiToken})
            )
            console.log(JSON.stringify(doLogoutResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(doLogoutResponse))
            expect(doLogoutResponse).not.toBeUndefined()
        })
    })
})
