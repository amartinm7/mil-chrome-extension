import Current from "../../domain/user/Current";

class DoLoginWithCookiesService {
    constructor(doLoginWithCookiesRepository) {
        this._doLoginWithCookiesRepository = doLoginWithCookiesRepository
    }
    async execute (doLoginWithCookiesServiceRequest) {
        console.log(">>>DoLoginWithCookiesService")
        try {
            return await this._executeDoLoginWithCookies()
        } catch (err) {
            console.log(JSON.stringify(err));
            console.log("ERROR: ====", err);
        }
    }

    async _executeDoLoginWithCookies(){
        console.log(">>>_executeDoLoginWithCookies")
        const doLoginWitCookiesResponse = await this._doLoginWithCookiesRepository.doLoginWithCurrentCookies()
        console.log(JSON.stringify(doLoginWitCookiesResponse))
        return new DoLoginWithCookiesServiceResponse({apiToken: doLoginWitCookiesResponse.data.apiToken})
    }
}

class DoLoginWithCookiesServiceRequest {
    constructor({email, password}) {
        this.email = email,
        this.password = password
    }
}

class DoLoginWithCookiesServiceResponse {
    constructor({email, createdAt, apiToken}) {
        this.current = new Current({email, createdAt, apiToken})
    }
}

export {
    DoLoginWithCookiesService, DoLoginWithCookiesServiceRequest, DoLoginWithCookiesServiceResponse
}