import global from "../../global"
import DoLoginRepository from "../../../../src/popup/framework/repository/user/DoLoginRepository";
import TransformToCredentialsService from "../../../../src/popup/framework/transformers/TransformToCredentialsService";
import DoLoginWithCookiesRepository
    from "../../../../src/popup/framework/repository/user/DoLoginWithCookiesRepository";
import {
    DoLoginWithBothService,
    DoLoginWithBothServiceRequest,
    DoLoginWithBothServiceResponse
} from "../../../../src/popup/application/user/DoLoginWithBothService";
const assert = require("assert")

console.log("welcome! DoLoginService test")

jest.mock("../../../../src/popup/framework/repository/user/DoLoginRepository");

describe('DoLoginWithBothService', function() {
    describe('user', function() {
        it('should return a valid response', async function() {
            //GIVEN
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
                new DoLoginWithCookiesRepository(),
                new TransformToCredentialsService()
            ).execute(
                new DoLoginWithBothServiceRequest({...global.credentials})
            )
            console.log(JSON.stringify(doLoginWithBothServiceResponse))
            //ASSERTS
            expect(doLoginWithBothServiceResponse).not.toBeUndefined()
            expect(doLoginWithBothServiceResponse).toEqual(expected)
        })

        it('should return a login valid response', async function() {
            //GIVEN
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
                new DoLoginWithCookiesRepository(),
                new TransformToCredentialsService()
            ).execute(
                new DoLoginWithBothServiceRequest({...global.credentials})
            )
            console.log(JSON.stringify(doLoginWithBothServiceResponse))
            //ASSERTS
            expect(doLoginWithBothServiceResponse).not.toBeUndefined()
            expect(doLoginWithBothServiceResponse).toEqual(expected)
        })
    })
})
