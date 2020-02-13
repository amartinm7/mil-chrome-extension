class DoLogoutService {
    constructor(doLogoutRepository) {
        this.doLogoutRepository = doLogoutRepository
    }
    async execute(doLogoutRequest) {
        console.log(">>>doLogoutService")
        const response = await this.doLogoutRepository.doLogout(doLogoutRequest.apiToken)
        console.log(JSON.stringify(response))
        return new DoLogoutServiceResponse({})
    }
}

class DoLogoutServiceRequest {
    constructor({apiToken}) {
        this.apiToken = apiToken
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