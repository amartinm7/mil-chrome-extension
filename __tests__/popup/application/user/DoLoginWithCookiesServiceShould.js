import {DoLoginWithCookiesRepository} from "../../../../src/popup/backend/framework/repository/user/DoLoginWithCookiesRepository";
import {
    DoLoginWithCookiesService,
    DoLoginWithCookiesServiceRequest, DoLoginWithCookiesServiceResponse
} from "../../../../src/popup/backend/application/user/DoLoginWithCookiesService";

const assert = require("assert")

console.log("welcome! DoLoginWithCookiesService test")

describe('DoLoginWithCookiesService', function() {
    describe('user', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }

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
                new DoLoginWithCookiesServiceRequest({...givenCredentials})
            )
            console.log(JSON.stringify(doLoginWithCookiesServiceResponse))
            //ASSERTS
            expect(doLoginWithCookiesServiceResponse).not.toBeUndefined()
            expect(doLoginWithCookiesServiceResponse).toEqual(expected)
        })
    })
})
