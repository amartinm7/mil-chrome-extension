class DoLogoutService {
    constructor(doLogoutRepository) {
        this._doLogoutRepository = doLogoutRepository
    }
    async execute(doLogoutRequest) {
        console.log(">>>doLogoutService")
        const doLogoutResponse = await this._doLogoutRepository.doLogout()
        console.log(`>>> doLogoutResponse ${JSON.stringify(doLogoutResponse)}`)
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