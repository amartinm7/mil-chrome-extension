class DoLoginService {
    constructor(doLogin) {
        this.doLogin = doLogin
    }
    async execute (doLoginServiceRequest) {
        console.log(">>>doLoginService")
        const loginResponse = await this.doLogin(doLoginServiceRequest.credentials)
        console.log(JSON.stringify(loginResponse.data))
        return toDoLoginServiceResponse(loginResponse)
    }
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