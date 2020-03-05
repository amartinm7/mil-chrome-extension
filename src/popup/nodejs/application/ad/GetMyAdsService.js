import {GetMyAdsRepositoryRequest} from "../../framework/repository/ad/GetMyAdsRepository";
import MyAds from "../../adomain/ad/MyAds";

class GetMyAdsService{
    constructor(getMyAdsRepository) {
        this._getMyAdsRepository = getMyAdsRepository
    }

    async execute (getMyAdsServiceRequest) {
        console.log(">>>getMyAdsService")
        if (!!getMyAdsServiceRequest.apiToken == false){ return }
        const adsResponse = await this._getMyAdsRepository.findAllAdsByUserId (
            new GetMyAdsRepositoryRequest( getMyAdsServiceRequest.apiToken )
        )
        console.log(`>>>getMyAdsService ${JSON.stringify(adsResponse)}`)
        const ads = new GetMyAdsServiceResponse( {
            ads: TransformToMyAdsService.toMyAds(adsResponse.data.data.anuncios)
        } )
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
    constructor({ads}) {
        this.ads = ads
    }
}

class TransformToMyAdsService {
    constructor() {
    }

    static toMyAd(jsonAd) {
        console.log("toMyAd(jsonAd)...")
        return new MyAds(jsonAd)
    }

    static toMyAds (jsonAdList){
        console.log("toMyAds(jsonAdList)...")
        const vm = this
        if (Array.isArray(jsonAdList)){
            return jsonAdList.map(function (jsonAd) {
                return vm.toMyAd(jsonAd);
            })
        }
        return []
    }
}

export {GetMyAdsService, GetMyAdsServiceRequest, GetMyAdsServiceResponse}