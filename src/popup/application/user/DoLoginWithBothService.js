import Current from "../../domain/user/Current";

class DoLoginWithBothService {
    constructor(doLoginRepository, doLoginWithCookiesRepository, transformToCredentialsService) {
        this._doLoginRepository = doLoginRepository
        this._doLoginWithCookiesRepository = doLoginWithCookiesRepository
        this._transformToCredentialsService = transformToCredentialsService
    }
    async execute (doLoginWithBothServiceRequest) {
        console.log(">>>DoLoginWithBothService")
        try {
            return await this._executeDoLoginWithCookies()
        } catch (e) {
            return await this._executeDoLogin(
                this._transformToCredentialsService.toCredentials(
                    { email: doLoginWithBothServiceRequest.email, password: doLoginWithBothServiceRequest.password }
                )
            )
        }
    }

    async _executeDoLoginWithCookies(){
        console.log(">>>_executeDoLoginWithCookies")
        const doLoginWitCookiesResponse = await this._doLoginWithCookiesRepository.doLoginWithCurrentCookies()
        console.log(`>>>doLoginWitCookiesResponse ${JSON.stringify(doLoginWitCookiesResponse)}`)
        return new DoLoginWithBothServiceResponse({apiToken: doLoginWitCookiesResponse.data.apiToken})
    }

    async _executeDoLogin(credentials){
        console.log(">>>_executeDoLogin")
        const doLoginRepositoryResponse = await this._doLoginRepository.doLogin(credentials)
        console.log(`>>> doLoginRepositoryResponse ${JSON.stringify(doLoginRepositoryResponse.data)}`)
        return new DoLoginWithBothServiceResponse({
            email: doLoginRepositoryResponse.data.user.email,
            createdAt: doLoginRepositoryResponse.data.user.createdAt,
            apiToken: doLoginRepositoryResponse.data.session.apiToken
        })
    }
}

class DoLoginWithBothServiceRequest {
    constructor({email, password}) {
        this.email = email,
        this.password = password
    }
}

class DoLoginWithBothServiceResponse {
    constructor({email, createdAt, apiToken}) {
        this.current = new Current({email, createdAt, apiToken})
    }
}

export {
    DoLoginWithBothService, DoLoginWithBothServiceRequest, DoLoginWithBothServiceResponse
}