import {DoLoginRepository} from "../../../../src/popup/backend/framework/repository/user/DoLoginRepository";
import {
    DoLoginService,
    DoLoginServiceRequest,
    DoLoginServiceResponse
} from "../../../../src/popup/backend/application/user/DoLoginService";

const assert = require("assert")

console.log("welcome! DoLoginService test")


describe('DoLoginService', function() {
    describe('user', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }

            const mockedDoLoginRepositoryResponse = {
                data: {
                    user:{
                        email: 'antonio.martin@schibsted.com',
                        createdAt: '2020-02-13T00:32:59+0100'
                    },
                    session: {
                        apiToken:'apiToken',
                        id: 'sessionId'
                    }
                }
            }
            //WHEN
            const expected = new DoLoginServiceResponse({
                'email':'antonio.martin@schibsted.com',
                'createdAt':'2020-02-13T00:32:59+0100',
                'apiToken': 'apiToken',
                'sessionId': 'sessionId'
            })
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedDoLoginRepositoryResponse));
            const doLoginServiceResponse = await new DoLoginService(
                new DoLoginRepository()
            ).execute(
                new DoLoginServiceRequest(givenCredentials)
            )
            console.log(JSON.stringify(doLoginServiceResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(doLoginServiceResponse))
            expect(doLoginServiceResponse).not.toBeUndefined()
            expect(doLoginServiceResponse).toEqual(expected)
        })
    })
})
