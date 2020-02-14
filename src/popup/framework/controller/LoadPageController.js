import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoLoginWithCookiesServiceRequest} from "../../application/user/DoLoginWithCookiesService";
import {GetMyAdsServiceRequest} from "../../application/ad/GetMyAdsService";
import {GetMyFavouriteAdsServiceRequest} from "../../application/ad/GetMyFavouriteAdsService";

class LoadPageController {

    async execute( loadPageControllerRequest ){
        console.log(">>>LoadPageController")
        const vm = this

        const doLoginServiceResponse = await ServiceFactoryBean.doLoginWithCookiesService().execute(
                new DoLoginWithCookiesServiceRequest({...loadPageControllerRequest})
        )

        const getMyAdsServiceResponse = await ServiceFactoryBean.getMyAdsService().execute(
            new GetMyAdsServiceRequest(doLoginServiceResponse.current.session.apiToken)
        )

        const getMyFavouriteAdsServiceResponse = await ServiceFactoryBean.getMyFavouriteAdsService().execute(
            new GetMyFavouriteAdsServiceRequest(doLoginServiceResponse.current.session.apiToken)
        )

        /*
        const savedAdsResponse = await this.getSavedSearchs(header, params)
        console.log(JSON.stringify(vm.savedSearchs))
        vm.savedSearchs = savedAdsResponse.data.data.anuncios
         */

        const loadPageControllerResponse = new LoadPageControllerResponse({
            current: doLoginServiceResponse.current,
            ads: getMyAdsServiceResponse.ads,
            favouriteAds: getMyFavouriteAdsServiceResponse.ads
        })
        console.log(`>>>LoadPageController after... ${JSON.stringify(loadPageControllerResponse)}`)
        return loadPageControllerResponse
    }
}

class LoadPageControllerRequest{
    constructor({email,password}) {
        this.email = email
        this.password = password
    }
}

class LoadPageControllerResponse{
    constructor({current, ads, favouriteAds}) {
        this.current = current
        this.ads = ads,
        this.favouriteAds = favouriteAds
    }
}

export {
    LoadPageControllerRequest, LoadPageControllerResponse, LoadPageController
}