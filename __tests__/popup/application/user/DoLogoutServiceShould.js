import {
    DoLogoutService,
    DoLogoutServiceRequest,
    DoLogoutServiceResponse
} from "../../../../src/popup/nodejs/application/user/DoLogoutService";
import {DoLogoutRepository} from "../../../../src/popup/nodejs/framework/repository/user/DoLogoutRepository";

const assert = require("assert")

console.log("welcome! DoLogoutService test")

describe('DoLogoutService', function() {
    describe('DoLogoutRepository', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const mockedDoLogoutRepositoryResponse = {}
            //WHEN
            const expected = new DoLogoutServiceResponse({})
            const mockDoLogoutRepository = jest.fn();
            DoLogoutRepository.prototype.doLogout = mockDoLogoutRepository
            mockDoLogoutRepository.mockReturnValue(Promise.resolve(mockedDoLogoutRepositoryResponse))
            const doLogoutResponse = await new DoLogoutService(
                new DoLogoutRepository()
            ).execute(
                new DoLogoutServiceRequest()
            )
            console.log(JSON.stringify(doLogoutResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(doLogoutResponse))
            expect(doLogoutResponse).not.toBeUndefined()
        })
    })
})
