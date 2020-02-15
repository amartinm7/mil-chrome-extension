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
            console.log(`>>>renewed ad ${doRenewAdServiceRequest.adId}`)
        } catch (e) {
            console.log(JSON.stringify(e))
        }
        return new DoRenewAdServiceResponse() //TODO
    }
}

class DoRenewAdServiceRequest {
    constructor({apiToken, adId}) {
        this.apiToken = apiToken
        this.adId = adId
    }
}

class DoRenewAdServiceResponse {
    constructor(){
    }
}

export {
    DoRenewAdService, DoRenewAdServiceRequest, DoRenewAdServiceResponse
}