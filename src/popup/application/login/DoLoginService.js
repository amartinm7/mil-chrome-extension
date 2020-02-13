import {Credentials} from "../../domain/Credentials";

class DoLoginService {
    constructor(doLogin) {
        this.doLogin = doLogin
    }
    async execute (doLoginServiceRequest) {
        console.log(">>>doLoginService")
        const loginResponse = await this.doLogin(toCredentialsDomain(doLoginServiceRequest.credentials))
        console.log(JSON.stringify(loginResponse.data))
        return toDoLoginServiceResponse(loginResponse)
    }
}
function  toCredentialsDomain({email, password}) {
    return new Credentials(email, password)
}

function toDoLoginServiceResponse(loginResponse) {
    return new DoLoginServiceResponse (
        loginResponse.data.user.email,
        loginResponse.data.user.createdAt,
        loginResponse.data.session.apiToken
    )
}

class DoLoginServiceRequest {
    constructor(credentials) {
        this.credentials = credentials
    }
}

class DoLoginServiceResponse {
    constructor(user, createdAt, apiToken) {
        this.user = user
        this.createdAt = createdAt
        this.apiToken = apiToken
    }
}

export {
    DoLoginService, DoLoginServiceRequest, DoLoginServiceResponse
}