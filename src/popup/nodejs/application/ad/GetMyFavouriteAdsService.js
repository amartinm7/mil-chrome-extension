import {GetMyFavouriteAdsRepositoryRequest} from "../../framework/repository/ad/GetMyFavouriteAdsRepository";
import MyFavouriteAds from "../../adomain/ad/MyFavouriteAds";

class GetMyFavouriteAdsService{
    constructor(getMyFavouriteAdsRepository, transformToMyFavouriteAdsService) {
        this._getMyFavouriteAdsRepository = getMyFavouriteAdsRepository
        this._transformToMyFavouriteAdsService = transformToMyFavouriteAdsService
    }

    async execute (getMyFavouriteAdsServiceRequest) {
        console.log(">>>GetMyFavouriteAdsService")
        if (!!getMyFavouriteAdsServiceRequest.apiToken == false){ return }
        const adsResponse = await this._getMyFavouriteAdsRepository.findAllMyFavouritesAds(
            new GetMyFavouriteAdsRepositoryRequest( getMyFavouriteAdsServiceRequest.apiToken)
        )
        const ads = new GetMyFavouriteAdsServiceResponse( {
            ads: TransformToMyFavouriteAdsService.toMyFavouriteAds(adsResponse.data.data.anuncios)
        } )
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
    constructor({ads}) {
        this.ads = ads
    }
}

class TransformToMyFavouriteAdsService {
    constructor() {
    }

    static toMyFavouriteAd(jsonAd) {
        console.log("toMyFavouriteAd(jsonAd)...")
        return new MyFavouriteAds(jsonAd)
    }

    static toMyFavouriteAds (jsonAdList){
        console.log("toMyFavouriteAds(jsonAdList)...")
        const vm = this
        if (Array.isArray(jsonAdList)){
            return jsonAdList.map(function (jsonAd) {
                return vm.toMyFavouriteAd(jsonAd);
            })
        }
        return []
    }
}

export {
    GetMyFavouriteAdsService, GetMyFavouriteAdsServiceRequest, GetMyFavouriteAdsServiceResponse
}