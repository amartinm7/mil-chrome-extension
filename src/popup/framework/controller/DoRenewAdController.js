import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoRenewAdServiceRequest} from "../../application/ad/DoRenewAdService";
import {DoLoginWithBothServiceRequest} from "../../application/user/DoLoginWithBothService";

class DoRenewAdController{
    async execute( doNewAdControllerRequest ){
        console.log(">>>DoNewAdController")
        const vm = this
        const doLoginWithBothServiceRequest = await ServiceFactoryBean.doLoginWithBothService().execute(
            new DoLoginWithBothServiceRequest({
                email: doNewAdControllerRequest.email,
                password: doNewAdControllerRequest.password
            })
        )

        await ServiceFactoryBean.doRenewAdService().execute(
            new DoRenewAdServiceRequest({
                apiToken: doLoginWithBothServiceRequest.current.session.apiToken,
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