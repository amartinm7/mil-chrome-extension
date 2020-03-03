import {GetAdStatsServiceRequest} from "../../../application/ad/GetAdStatsService";

class GetAdStatsController {
    constructor(getAdStatsService) {
        this._getAdStatsService = getAdStatsService
    }

    async execute(getAdStatsControllerRequest){
        const getAdStatsServiceResponse = await this._getAdStatsService.execute(
            new GetAdStatsServiceRequest( getAdStatsControllerRequest.adId )
        )
        return new GetAdStatsControllerResponse (getAdStatsServiceResponse.adStats)
    }
}

class GetAdStatsControllerRequest{
    constructor(adId) {
        this.adId = adId
    }
}

class GetAdStatsControllerResponse{
    constructor(adStats) {
        this.adStats = adStats
    }
}

export {
    GetAdStatsController, GetAdStatsControllerRequest, GetAdStatsControllerResponse
}