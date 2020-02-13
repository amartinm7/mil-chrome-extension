import MyFavouriteAds from "../../domain/MyFavouriteAds";

export default class TransformToMyFavouriteAdsService {
    constructor() {
    }

    toMyFavouriteAd(jsonAd) {
        console.log("toMyFavouriteAd(jsonAd)...")
        return new MyFavouriteAds(jsonAd)
    }

    toMyFavouriteAds (jsonAdList){
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
