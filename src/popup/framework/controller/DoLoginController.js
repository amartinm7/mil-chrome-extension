import ServiceFactoryBean from "../ServiceFactoryBean";
import {GetMyAdsServiceRequest} from "../../application/ad/GetMyAdsService";
import {GetMyFavouriteAdsServiceRequest} from "../../application/ad/GetMyFavouriteAdsService";
import {DoLoginServiceRequest} from "../../application/user/DoLoginService";

class DoLoginController {
    constructor(doLoginService, getMyAdsService, getMyFavouriteAdsService) {
        this._doLoginService = doLoginService
        this._getMyAdsService = getMyAdsService
        this._getMyFavouriteAdsService = getMyFavouriteAdsService
    }

    async execute( doLoginControllerRequest ){
        console.log(">>>DoLoginController")
        const vm = this

        const doLoginServiceResponse = await this._doLoginService.execute(
                new DoLoginServiceRequest({...doLoginControllerRequest})
        )

        const getMyAdsServiceResponse = await this._getMyAdsService.execute(
            new GetMyAdsServiceRequest(doLoginServiceResponse.current.session.apiToken)
        )

        const getMyFavouriteAdsServiceResponse = await this._getMyFavouriteAdsService.execute(
            new GetMyFavouriteAdsServiceRequest(doLoginServiceResponse.current.session.apiToken)
        )

        const doLoginControllerResponse = new DoLoginControllerResponse({
            current: doLoginServiceResponse.current,
            ads: getMyAdsServiceResponse.ads,
            favouriteAds: getMyFavouriteAdsServiceResponse.ads
        })
        console.log(`>>>DoLoginController after... ${JSON.stringify(doLoginControllerResponse)}`)
        return doLoginControllerResponse
    }
}

class DoLoginControllerRequest{
    constructor({email,password}) {
        this.email = email
        this.password = password
    }
}

class DoLoginControllerResponse{
    constructor({current, ads, favouriteAds}) {
        this.current = current
        this.ads = ads,
        this.favouriteAds = favouriteAds
    }
}

export {
    DoLoginControllerRequest, DoLoginControllerResponse, DoLoginController
}