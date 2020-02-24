import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoRenewAdServiceRequest} from "../../application/ad/DoRenewAdService";
import {DoLoginWithBothServiceRequest} from "../../application/user/DoLoginWithBothService";

class DoRenewAdController{
    constructor(doLoginWithBothService, doRenewAdService) {
        this._doLoginWithBothService = doLoginWithBothService
        this._doRenewAdService = doRenewAdService
    }

    async execute( doNewAdControllerRequest ){
        console.log(">>>DoRenewAdService")
        const vm = this
        console.log(">>>DoRenewAdController.doLoginWithBothService")
        const doLoginWithBothServiceResponse = await this._doLoginWithBothService().execute(
            new DoLoginWithBothServiceRequest({
                email: doNewAdControllerRequest.email,
                password: doNewAdControllerRequest.password
            })
        )
        console.log(">>>DoRenewAdController.doRenewAdService")
        await this._doRenewAdService().execute(
            new DoRenewAdServiceRequest({
                apiToken: doLoginWithBothServiceResponse.current.session.apiToken,
                adId: doNewAdControllerRequest.adId,
                sessionId: doLoginWithBothServiceResponse.current.session.id
            })
        )
        console.log(">>>DoRenewAdService ends")
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