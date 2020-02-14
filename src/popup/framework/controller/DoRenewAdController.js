import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoLoginWithCookiesServiceRequest} from "../../application/user/DoLoginWithCookiesService";
import {DoRenewAdServiceRequest} from "../../application/ad/DoRenewAdService";

class DoRenewAdController{
    async execute( doNewAdControllerRequest ){
        console.log(">>>DoNewAdController")
        const vm = this
        const doLoginServiceResponse = await ServiceFactoryBean.doLoginWithCookiesService().execute(
            new DoLoginWithCookiesServiceRequest({
                email: doNewAdControllerRequest.email,
                password: doNewAdControllerRequest.password
            })
        )

        await ServiceFactoryBean.doRenewAdService().execute(
            new DoRenewAdServiceRequest({
                apiToken: doLoginServiceResponse.current.session.apiToken,
                adId: doNewAdControllerRequest.adId
            })
        )

        return new DoRenewAdControllerResponse()
    }
}

class DoRenewAdControllerRequest{
    constructor({email,password,adId}) {
        this.email = email,
        this.password = password,
        this.adId = adId
    }
}

class DoRenewAdControllerResponse{
    constructor() {
    }
}

export {
    DoRenewAdController, DoRenewAdControllerRequest, DoRenewAdControllerResponse
}