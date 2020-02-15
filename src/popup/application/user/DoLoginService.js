import Current from "../../domain/user/Current";

class DoLoginService {
    constructor(doLoginRepository, transformToCredentialsService) {
        this._doLoginRepository = doLoginRepository
        this._transformToCredentialsService = transformToCredentialsService
    }
    async execute (doLoginServiceRequest) {
        console.log(">>>doLoginService")
        const doLoginServiceResponse = await this._doLoginRepository.doLogin(
            this._transformToCredentialsService.toCredentials(doLoginServiceRequest.credentials)
        )
        console.log(`>>>doLoginServiceResponse... ${JSON.stringify(doLoginServiceResponse)}`)
        return toDoLoginServiceResponse(doLoginServiceResponse)
    }
}

class DoLoginServiceRequest {
    constructor(credentials) {
        this.credentials = credentials
    }
}

class DoLoginServiceResponse {
    constructor({email, createdAt, apiToken, sessionId}) {
        this.current = new Current({email, createdAt, apiToken, sessionId})
    }
}

function toDoLoginServiceResponse(loginResponse) {
    return new DoLoginServiceResponse ({
        email: loginResponse.data.user.email,
        createdAt: loginResponse.data.user.createdAt,
        apiToken: loginResponse.data.session.apiToken,
        sessionId: loginResponse.data.session.id
    })
}

export {
    DoLoginService, DoLoginServiceRequest, DoLoginServiceResponse
}