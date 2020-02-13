import MyAds from "../../domain/MyAds";

export default class TransformToMyAdsService {
    constructor() {
    }

    toMyAd(jsonAd) {
        console.log("toMyAd(jsonAd)...")
        return new MyAds(jsonAd)
    }

    toMyAds (jsonAdList){
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
