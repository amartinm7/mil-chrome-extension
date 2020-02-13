class DoLoginService {
    constructor(doLoginRepository, transformToCredentialsService) {
        this.doLoginRepository = doLoginRepository
        this.transformToCredentialsService = transformToCredentialsService
    }
    async execute (doLoginServiceRequest) {
        console.log(">>>doLoginService")
        const loginResponse = await this.doLoginRepository.doLogin(
            this.transformToCredentialsService.toCredentials(doLoginServiceRequest.credentials)
        )
        console.log(JSON.stringify(loginResponse.data))
        return toDoLoginServiceResponse(loginResponse)
    }
}

class DoLoginServiceRequest {
    constructor(credentials) {
        this.credentials = credentials
    }
}

class DoLoginServiceResponse {
    constructor({email, createdAt, apiToken}) {
        this.logedUser = {
            email: email,
            createdAt: createdAt
        }
        this.session = {
            apiToken:  apiToken
        }
    }
}

function toDoLoginServiceResponse(loginResponse) {
    return new DoLoginServiceResponse ({
        email: loginResponse.data.user.email,
        createdAt: loginResponse.data.user.createdAt,
        apiToken: loginResponse.data.session.apiToken
    })
}

export {
    DoLoginService, DoLoginServiceRequest, DoLoginServiceResponse
}