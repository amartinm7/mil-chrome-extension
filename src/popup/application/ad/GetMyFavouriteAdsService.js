class GetMyFavouriteAdsService{
    constructor(getMyFavouriteAdsRepository, transformToMyFavouriteAdsService) {
        this.getMyFavouriteAdsRepository = getMyFavouriteAdsRepository
        this.transformToMyFavouriteAdsService = transformToMyFavouriteAdsService
    }

    async execute (getMyFavouriteAdsServiceRequest) {
        console.log(">>>GetMyFavouriteAdsService")
        if (!!getMyFavouriteAdsServiceRequest.apiToken == false){ return }
        const adsResponse = await this.getMyFavouriteAdsRepository.findAllMyFavouritesAds(getMyFavouriteAdsServiceRequest.apiToken)
        const ads = new GetMyFavouriteAdsServiceResponse( this.transformToMyFavouriteAdsService.toMyFavouriteAds(adsResponse.data.data.anuncios) )
        console.log(JSON.stringify(ads))
        return ads
    }
}

class GetMyFavouriteAdsServiceRequest{
    constructor(apiToken) {
        this.apiToken = apiToken
    }
}

class GetMyFavouriteAdsServiceResponse{
    constructor(ads) {
        this.ads = ads
    }
}

export {GetMyFavouriteAdsService, GetMyFavouriteAdsServiceRequest, GetMyFavouriteAdsServiceResponse}