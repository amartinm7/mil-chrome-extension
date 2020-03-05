import {DoLoginRepository} from "../../../../src/popup/nodejs/framework/repository/user/DoLoginRepository";
import {DoLoginWithCookiesRepository} from "../../../../src/popup/nodejs/framework/repository/user/DoLoginWithCookiesRepository";
import {
    DoLoginWithBothService,
    DoLoginWithBothServiceRequest, DoLoginWithBothServiceResponse
} from "../../../../src/popup/nodejs/application/user/DoLoginWithBothService";

const assert = require("assert")

console.log("welcome! DoLoginWithBothService test")

describe('DoLoginWithBothService', function() {
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
                        apiToken:'apiToken'
                    }
                }
            }
            const mockedDoLoginWithCookiesRepositoryResponse = {
                data: {
                    apiToken:'apiToken'
                }
            }
            //WHEN
            const expected = new DoLoginWithBothServiceResponse({
                email: "",
                createdAt: "",
                apiToken:'apiToken'
            })
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedDoLoginRepositoryResponse));
            const mockDoLoginWithCookiesRepository = jest.fn();
            DoLoginWithCookiesRepository.prototype.doLoginWithCurrentCookies = mockDoLoginWithCookiesRepository;
            mockDoLoginWithCookiesRepository.mockReturnValue(Promise.resolve(mockedDoLoginWithCookiesRepositoryResponse));
            const doLoginWithBothServiceResponse = await new DoLoginWithBothService(
                new DoLoginRepository(),
                new DoLoginWithCookiesRepository()
            ).execute(
                new DoLoginWithBothServiceRequest({...givenCredentials})
            )
            console.log(JSON.stringify(doLoginWithBothServiceResponse))
            //ASSERTS
            expect(doLoginWithBothServiceResponse).not.toBeUndefined()
            expect(doLoginWithBothServiceResponse).toEqual(expected)
        })

        it('should return a login valid response', async function() {
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
                        apiToken:'apiToken'
                    }
                }
            }
            const mockedDoLoginWithCookiesRepositoryResponse = {
                data: {
                    apiToken:'apiToken'
                }
            }
            //WHEN
            const expected = new DoLoginWithBothServiceResponse({
                email: 'antonio.martin@schibsted.com',
                createdAt: '2020-02-13T00:32:59+0100',
                apiToken:'apiToken'
            })
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedDoLoginRepositoryResponse));
            const mockDoLoginWithCookiesRepository = jest.fn();
            DoLoginWithCookiesRepository.prototype.doLoginWithCurrentCookies = mockDoLoginWithCookiesRepository;
            mockDoLoginWithCookiesRepository.mockReturnValue(Promise.reject(mockedDoLoginWithCookiesRepositoryResponse));
            const doLoginWithBothServiceResponse = await new DoLoginWithBothService(
                new DoLoginRepository(),
                new DoLoginWithCookiesRepository()
            ).execute(
                new DoLoginWithBothServiceRequest({...givenCredentials})
            )
            console.log(JSON.stringify(doLoginWithBothServiceResponse))
            //ASSERTS
            expect(doLoginWithBothServiceResponse).not.toBeUndefined()
            expect(doLoginWithBothServiceResponse).toEqual(expected)
        })
    })
})
