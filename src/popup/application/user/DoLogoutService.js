class DoLogoutService {
    constructor(doLogoutRepository) {
        this._doLogoutRepository = doLogoutRepository
    }
    async execute(doLogoutRequest) {
        console.log(">>>doLogoutService")
        const response = await this._doLogoutRepository.doLogout()
        console.log(JSON.stringify(response))
        return new DoLogoutServiceResponse({})
    }
}

class DoLogoutServiceRequest {
    constructor() {
    }
}

class DoLogoutServiceResponse {
    constructor({response}){
        this.response = response
    }
}

export {
    DoLogoutService, DoLogoutServiceRequest, DoLogoutServiceResponse
}