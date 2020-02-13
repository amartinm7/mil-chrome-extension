class GetMyAdsService{
    constructor(getMyAdsRepository, transformToMyAdsService) {
        this.getMyAdsRepository = getMyAdsRepository
        this.transformToMyAdsService = transformToMyAdsService
    }

    async execute (getMyAdsServiceRequest) {
        console.log(">>>getMyAdsService")
        if (!!getMyAdsServiceRequest.apiToken == false){ return }
        const adsResponse = await this.getMyAdsRepository.findAllAdsByUserId(getMyAdsServiceRequest.apiToken)
        const ads = new GetMyAdsServiceResponse( this.transformToMyAdsService.toMyAds(adsResponse.data.data.anuncios) )
        console.log(JSON.stringify(ads))
        return ads
    }
}

class GetMyAdsServiceRequest{
    constructor(apiToken) {
        this.apiToken = apiToken
    }
}

class GetMyAdsServiceResponse{
    constructor(ads) {
        this.ads = ads
    }
}

export {GetMyAdsService, GetMyAdsServiceRequest, GetMyAdsServiceResponse}