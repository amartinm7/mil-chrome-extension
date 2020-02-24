import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoLogoutServiceRequest} from "../../application/user/DoLogoutService";

class DoLogoutController{
    constructor() {
        this._doLogoutService = ServiceFactoryBean.doLogoutService()
    }
    async execute( doLogoutControllerRequest ){
        console.log(">>>DoLogoutController")
        const doLogoutServiceResponse = await this._doLogoutService.execute(
            new DoLogoutServiceRequest({})
        )
        return new DoLogoutControllerResponse()
    }
}

class DoLogoutControllerRequest{
    constructor() {
    }
}

class DoLogoutControllerResponse{
    constructor() {
    }
}

export {
    DoLogoutController, DoLogoutControllerResponse, DoLogoutControllerRequest
}