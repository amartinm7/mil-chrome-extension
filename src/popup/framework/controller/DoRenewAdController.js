import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoRenewAdServiceRequest} from "../../application/ad/DoRenewAdService";
import {DoLoginWithBothServiceRequest} from "../../application/user/DoLoginWithBothService";

class DoRenewAdController{
    async execute( doNewAdControllerRequest ){
        console.log(">>>DoRenewAdService")
        const vm = this
        const doLoginWithBothServiceResponse = await ServiceFactoryBean.doLoginWithBothService().execute(
            new DoLoginWithBothServiceRequest({
                email: doNewAdControllerRequest.email,
                password: doNewAdControllerRequest.password
            })
        )

        await ServiceFactoryBean.doRenewAdService().execute(
            new DoRenewAdServiceRequest({
                apiToken: doLoginWithBothServiceResponse.current.session.apiToken,
                adId: doNewAdControllerRequest.adId,
                sessionId: doLoginWithBothServiceResponse.current.session.id
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