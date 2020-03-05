import {DoLogoutServiceRequest} from "../../../application/user/DoLogoutService";

class DoLogoutController{
    constructor(doLogoutService) {
        this._doLogoutService = doLogoutService
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