import {DoLoginRepository} from "../../../../../src/popup/backend/framework/repository/user/DoLoginRepository";
import {DoLoginControllerRequest} from "../../../../../src/popup/backend/framework/controller/user/DoLoginController";
import ControllerFacadeFactoryBean from "../../../../../src/popup/backend/framework/ControllerFacadeFactoryBean";
import {DoLoginServiceResponse} from "../../../../../src/popup/backend/application/user/DoLoginService";

const assert = require("assert")

console.log("welcome! DoLoginController test")

describe('DoLoginController', function() {
    describe('execute', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }

            //WHEN
            const expected = new DoLoginServiceResponse({
                email: "antonio.martin@schibsted.com",
                createdAt: "2020-02-13T00:32:59+0100",
                apiToken:'apiToken',
                sessionId: 'sessionId'
            })

            //MOCK
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
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedDoLoginRepositoryResponse));

            const doLoginControllerResponse = await ControllerFacadeFactoryBean.doLoginController().execute(
                new DoLoginControllerRequest({...givenCredentials})
            )
            //ASSERTS
            console.log(">>>" + JSON.stringify(doLoginControllerResponse))
            expect(doLoginControllerResponse).not.toBeUndefined()
            expect(doLoginControllerResponse).toEqual(expected)
        })
    })
})
