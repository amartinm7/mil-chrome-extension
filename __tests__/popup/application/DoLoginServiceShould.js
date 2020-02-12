import {
    DoLoginService,
    DoLoginServiceRequest
} from "../../../src/popup/application/login/DoLoginService"
import global from "../global"
import doLogin from "../../../src/popup/framework/repository/DoLogin";

const assert = require("assert")

console.log("welcome! DoLoginService test")

describe('DoLoginService', function() {
    describe('login', function() {
        it('should return a valid response', async function() {
            const expected = {
                "user": "antonio.martin@schibsted.com",
                "createdAt": "2020-02-13T00:32:59+0100"
            }
            const doLoginServiceResponse = await new DoLoginService(doLogin).execute( new DoLoginServiceRequest(global.credentials) )
            console.log(">>>" + JSON.stringify(doLoginServiceResponse))
            expect(doLoginServiceResponse).not.toBeUndefined()
            expect(doLoginServiceResponse.user).toEqual(expected.user)
            expect(doLoginServiceResponse.createdAt).not.toBeUndefined()
        })
    })
})
