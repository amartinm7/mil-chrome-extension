import AdStats from "../../domain/ad/AdStats";
import {GetAdStatsRepositoryRequest} from "../../framework/repository/ad/GetAdStatsRepository";

class GetAdStatsService{
    constructor(getAdStatsRepository) {
        this._getAdStatsRepository = getAdStatsRepository
    }

    async execute (getAdStatsServiceRequest) {
        console.log(">>>GetAdStatsService")
        const getAdStatsRepositoryResponse = await this._getAdStatsRepository.findStatsByAdId(
            new GetAdStatsRepositoryRequest(getAdStatsServiceRequest.adId)
        )
        console.log(`>>>GetAdStatsService ${JSON.stringify(getAdStatsRepositoryResponse.data)}`)
        return new GetAdStatsServiceResponse( new ToResponseToDomain().transform(getAdStatsRepositoryResponse))
    }
}

class GetAdStatsServiceRequest{
    constructor(adId) {
        this.adId = adId
    }
}

class GetAdStatsServiceResponse{
    constructor( adStats ) {
        this.adStats = adStats
    }
}

class ToResponseToDomain{
    constructor() {}
    transform(response){
        return new AdStats(
            response.data.autoRenewals,
            response.data.emailsSent,
            response.data.favorites,
            response.data.listings,
            response.data.phoneViews,
            response.data.shares,
            response.data.views,
            response.data.memberSince,
            response.data.fullStats.account.memberSince
        )
    }
}

export {GetAdStatsService, GetAdStatsServiceRequest, GetAdStatsServiceResponse}