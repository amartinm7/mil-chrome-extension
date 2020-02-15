import global from "../../global"
import DoLoginWithCookiesRepository
    from "../../../../src/popup/framework/repository/user/DoLoginWithCookiesRepository"
import {
    DoLoginWithCookiesService,
    DoLoginWithCookiesServiceRequest,
    DoLoginWithCookiesServiceResponse
} from "../../../../src/popup/application/user/DoLoginWithCookiesService"
const assert = require("assert")

console.log("welcome! DoLoginService test")

jest.mock("../../../../src/popup/framework/repository/user/DoLoginRepository")

describe('DoLoginWithCookiesService', function() {
    describe('user', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const mockedDoLoginWithCookiesRepositoryResponse = {
                data: {
                    apiToken:'apiToken'
                }
            }
            //WHEN
            const expected = new DoLoginWithCookiesServiceResponse({
                email: "",
                createdAt: "",
                apiToken:'apiToken'
            })
            const mockDoLoginWithCookiesRepository = jest.fn();
            DoLoginWithCookiesRepository.prototype.doLoginWithCurrentCookies = mockDoLoginWithCookiesRepository;
            mockDoLoginWithCookiesRepository.mockReturnValue(Promise.resolve(mockedDoLoginWithCookiesRepositoryResponse));
            const doLoginWithCookiesServiceResponse = await new DoLoginWithCookiesService(
                new DoLoginWithCookiesRepository()
            ).execute(
                new DoLoginWithCookiesServiceRequest({...global.credentials})
            )
            console.log(JSON.stringify(doLoginWithCookiesServiceResponse))
            //ASSERTS
            expect(doLoginWithCookiesServiceResponse).not.toBeUndefined()
            expect(doLoginWithCookiesServiceResponse).toEqual(expected)
        })
    })
})
