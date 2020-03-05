import {DoLoginServiceRequest} from "../../../application/user/DoLoginService";

class DoLoginController {
    constructor(doLoginService) {
        this._doLoginService = doLoginService
    }

    async execute( doLoginControllerRequest ){
        console.log(">>>DoLoginController")
        const vm = this

        const doLoginServiceResponse = await this._doLoginService.execute(
                new DoLoginServiceRequest({...doLoginControllerRequest})
        )

        const doLoginControllerResponse = new DoLoginControllerResponse({
            current: doLoginServiceResponse.current
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
    constructor({current}) {
        this.current = current
    }
}

export {
    DoLoginControllerRequest, DoLoginControllerResponse, DoLoginController
}