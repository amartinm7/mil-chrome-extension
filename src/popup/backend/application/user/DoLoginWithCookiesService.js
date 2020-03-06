import Current from "../../adomain/user/Current";

class DoLoginWithCookiesService {
    constructor(doLoginWithCookiesRepository) {
        this._doLoginWithCookiesRepository = doLoginWithCookiesRepository
    }

    async execute (doLoginWithCookiesServiceRequest) {
        console.log(">>>DoLoginWithCookiesService")
        try {
            const doLoginWitCookiesResponse = await this._doLoginWithCookiesRepository.doLoginWithCurrentCookies()
            console.log(`>>> doLoginWitCookiesResponse ${JSON.stringify(doLoginWitCookiesResponse)}`)
            return new DoLoginWithCookiesServiceResponse({
                apiToken: doLoginWitCookiesResponse.data.apiToken
            })
        } catch (err) {
            console.log(JSON.stringify(err));
            console.log("ERROR: ====", err);
        }
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