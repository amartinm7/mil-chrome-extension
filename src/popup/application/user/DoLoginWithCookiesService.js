import Current from "../../domain/user/Current";

class DoLoginWithCookiesService {
    constructor(doLoginRepository, doLoginWithCookiesRepository, transformToCredentialsService) {
        this._doLoginRepository = doLoginRepository
        this._doLoginWithCookiesRepository = doLoginWithCookiesRepository
        this._transformToCredentialsService = transformToCredentialsService
    }
    async execute (doLoginWithCookiesServiceRequest) {
        console.log(">>>DoLoginWithCookiesService")
        try {
            return await this._executeDoLoginWithCookies()
        } catch (e) {
            return await this._executeDoLogin(
                this._transformToCredentialsService.toCredentials(
                    { email: doLoginWithCookiesServiceRequest.email, password: doLoginWithCookiesServiceRequest.password }
                )
            )
        }
    }

    async _executeDoLoginWithCookies(){
        console.log(">>>_executeDoLoginWithCookies")
        const doLoginWitCookiesResponse = await this._doLoginWithCookiesRepository.doLoginWithCurrentCookies()
        console.log(JSON.stringify(doLoginWitCookiesResponse))
        return new DoLoginWithCookiesServiceResponse({apiToken: doLoginWitCookiesResponse.data.apiToken})
    }

    async _executeDoLogin(credentials){
        console.log(">>>_executeDoLogin")
        const doLoginRepositoryResponse = await this._doLoginRepository.doLogin(credentials)
        console.log(JSON.stringify(doLoginRepositoryResponse.data))
        return new DoLoginWithCookiesServiceResponse({
            email: doLoginRepositoryResponse.data.user.email,
            createdAt: doLoginRepositoryResponse.data.user.createdAt,
            apiToken: doLoginRepositoryResponse.data.session.apiToken
        })
    }
}

class DoLoginWithCookiesServiceRequest {
    constructor({email, password}) {
        this.email = email,
        this.password = password
    }
}

class DoLoginWithCookiesServiceResponse {
    constructor({email, createdAt, apiToken}) {
        this.current = new Current({email, createdAt, apiToken})
    }
}

export {
    DoLoginWithCookiesService, DoLoginWithCookiesServiceRequest, DoLoginWithCookiesServiceResponse
}