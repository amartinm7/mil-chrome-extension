class DoLoginWithCookiesService {
    constructor(doLoginRepository, doLoginWithCookiesRepository, transformToCredentialsService) {
        this._doLoginRepository = doLoginRepository
        this._doLoginWithCookiesRepository = doLoginWithCookiesRepository
        this._transformToCredentialsService = transformToCredentialsService
    }
    async execute (doLoginWithCookiesServiceRequest) {
        console.log(">>>DoLoginWithCookiesService")
        try {
            const apiToken = await this._executeDoLoginWithCookies()
            return toDoLoginWithCookiesServiceResponse(apiToken)
        } catch (e) {
            const apiToken = await this._executeDoLogin(
                this._transformToCredentialsService.toCredentials(doLoginWithCookiesServiceRequest.credentials)
            )
            return toDoLoginWithCookiesServiceResponse(apiToken)
        }
    }

    async _executeDoLoginWithCookies(){
        console.log(">>>_executeDoLoginWithCookies")
        const doLoginWitCookiesResponse = await this._doLoginWithCookiesRepository.doLoginWithCurrentCookies()
        console.log(JSON.stringify(doLoginWitCookiesResponse))
        const apiToken = doLoginWitCookiesResponse.data.apiToken
        return apiToken
    }

    async _executeDoLogin(credentials){
        console.log(">>>_executeDoLogin")
        const doLoginRepositoryResponse = await this._doLoginRepository.doLogin(credentials)
        console.log(JSON.stringify(doLoginRepositoryResponse))
        const apiToken = doLoginRepositoryResponse.data.session.apiToken
        return apiToken
    }
}

class DoLoginWithCookiesServiceRequest {
    constructor(credentials) {
        this.credentials = credentials
    }
}

class DoLoginWithCookiesServiceResponse {
    constructor({apiToken}) {
        this.apiToken = apiToken
    }
}

function toDoLoginWithCookiesServiceResponse(apiToken) {
    return new DoLoginWithCookiesServiceResponse ({
        apiToken: apiToken
    })
}

export {
    DoLoginWithCookiesService, DoLoginWithCookiesServiceRequest, DoLoginWithCookiesServiceResponse
}