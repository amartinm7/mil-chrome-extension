import ServiceFactoryBean from "../ServiceFactoryBean";
import {DoLogoutServiceRequest} from "../../application/user/DoLogoutService";

class DoLogoutController{
    async execute( DoLogoutController ){
        console.log(">>>DoLogoutController")
        const doLoginServiceResponse = await ServiceFactoryBean.doLogoutService().execute(
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