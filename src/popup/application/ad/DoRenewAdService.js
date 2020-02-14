class DoRenewAdService {
    constructor(doLoginRepository, doLoginWithCurrentCookiesRepository, doRenewAdRepository) {
        this._doLoginRepository = doLoginRepository
        this._doLoginWithCurrentCookiesRepository = doLoginWithCurrentCookiesRepository
        this._doRenewAdRepository = doRenewAdRepository
    }
    async execute(doRenewAdServiceRequest) {
        console.log(">>>onDoRenew")
        try {
            const loginWithCookieResponse = await this._doLoginWithCurrentCookiesRepository.doLoginWithCurrentCookies()
            const apiToken = loginWithCookieResponse.data.apiToken
            try {
                await this._doRenewAdRepository.doRenewAd(apiToken, doRenewAdServiceRequest.ad.idanuncio)
                console.log(`>>>renewed ad ${doRenewAdServiceRequest.ad.idanuncio}`)
            } catch (e) {
                console.log(JSON.stringify(e))
            }
        } catch (err) {
            const loginResponse = await this._doLoginRepository.doLogin(doRenewAdServiceRequest.credentials)
            console.log(JSON.stringify(loginResponse.data))
            const apiToken = loginResponse.data.session.apiToken
            try {
                await this._doRenewAdRepository.doRenewAd(apiToken, doRenewAdServiceRequest.ad.idanuncio)
                console.log(`>>>renewed ad ${doRenewAdServiceRequest.ad.idanuncio}`)
            } catch (e) {
                console.log(JSON.stringify(e))
            }
        }
        return {} //TODO
    }
}

class DoRenewAdServiceRequest {
    constructor({credentials, ad}) {
        this.credentials = credentials
        this.ad = ad
    }
}

class DoRenewAdServiceResponse {
    constructor(){
    }
}

export {
    DoRenewAdService, DoRenewAdServiceRequest, DoRenewAdServiceResponse
}