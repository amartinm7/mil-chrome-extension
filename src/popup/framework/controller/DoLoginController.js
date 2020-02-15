import ServiceFactoryBean from "../ServiceFactoryBean";
import {GetMyAdsServiceRequest} from "../../application/ad/GetMyAdsService";
import {GetMyFavouriteAdsServiceRequest} from "../../application/ad/GetMyFavouriteAdsService";
import {DoLoginServiceRequest} from "../../application/user/DoLoginService";

class DoLoginController {

    async execute( doLoginControllerRequest ){
        console.log(">>>DoLoginController")
        const vm = this

        const doLoginServiceResponse = await ServiceFactoryBean.doLoginService().execute(
                new DoLoginServiceRequest({...doLoginControllerRequest})
        )

        const getMyAdsServiceResponse = await ServiceFactoryBean.getMyAdsService().execute(
            new GetMyAdsServiceRequest(doLoginServiceResponse.current.session.apiToken)
        )

        const getMyFavouriteAdsServiceResponse = await ServiceFactoryBean.getMyFavouriteAdsService().execute(
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