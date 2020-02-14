import {
    DoLoginService,
    DoLoginServiceRequest,
    DoLoginServiceResponse
} from "../../../../src/popup/application/user/DoLoginService"
import global from "../../global"
import DoLoginRepository from "../../../../src/popup/framework/repository/user/DoLoginRepository";
import TransformToCredentialsService from "../../../../src/popup/framework/transformers/TransformToCredentialsService";
const assert = require("assert")

console.log("welcome! DoLoginService test")

jest.mock("../../../../src/popup/framework/repository/user/DoLoginRepository");

describe('DoLoginService', function() {
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
            //WHEN
            const expected = new DoLoginServiceResponse({
                'email':'antonio.martin@schibsted.com',
                'createdAt':'2020-02-13T00:32:59+0100',
                'apiToken': 'apiToken'
            })
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedDoLoginRepositoryResponse));
            const doLoginServiceResponse = await new DoLoginService(
                new DoLoginRepository(), new TransformToCredentialsService()
            ).execute(
                new DoLoginServiceRequest(global.credentials)
            )
            console.log(JSON.stringify(doLoginServiceResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(doLoginServiceResponse))
            expect(doLoginServiceResponse).not.toBeUndefined()
            expect(doLoginServiceResponse).toEqual(expected)
        })
    })
})
