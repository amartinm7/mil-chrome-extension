import {DoRenewAdRepositoryRequest} from "../../framework/repository/ad/DoRenewAdRepository";

class DoRenewAdService {
    constructor(doRenewAdRepository) {
        this._doRenewAdRepository = doRenewAdRepository
    }

    async execute(doRenewAdServiceRequest) {
        console.log(">>>DoRenewAdService")
        try {
            await this._doRenewAdRepository.doRenewAd(
                new DoRenewAdRepositoryRequest({...doRenewAdServiceRequest})
            )
            console.log(`>>>renewed ad with success ${doRenewAdServiceRequest.adId}`)
        } catch (e) {
            console.log(`>>>renewed with error ${JSON.stringify(e)}`)
        }
        console.log(">>>finished renew ad")
        return new DoRenewAdServiceResponse() //TODO
    }
}

class DoRenewAdServiceRequest {
    constructor({apiToken, adId, sessionId}) {
        this.apiToken = apiToken
        this.adId = adId
        this.sessionId = sessionId
    }
}

class DoRenewAdServiceResponse {
    constructor(){
    }
}

export {
    DoRenewAdService, DoRenewAdServiceRequest, DoRenewAdServiceResponse
}