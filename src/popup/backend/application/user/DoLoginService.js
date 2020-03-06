import Current from "../../adomain/user/Current";
import {DoLoginRepositoryRequest} from "../../framework/repository/user/DoLoginRepository";

class DoLoginService {
    constructor(doLoginRepository) {
        this._doLoginRepository = doLoginRepository
    }

    async execute (doLoginServiceRequest) {
        console.log(">>>doLoginService")
        const doLoginServiceResponse = await this._doLoginRepository.doLogin(
            new DoLoginRepositoryRequest({...doLoginServiceRequest})
        )
        console.log(`>>>doLoginServiceResponse... ${JSON.stringify(doLoginServiceResponse)}`)
        return toDoLoginServiceResponse(doLoginServiceResponse)
    }
}

class DoLoginServiceRequest {
    constructor({email, password}) {
        this.email = email
        this.password = password
    }
}

class DoLoginServiceResponse {
    constructor({email, createdAt, apiToken, sessionId}) {
        this.current = new Current({email, createdAt, apiToken, sessionId})
    }
}

function toDoLoginServiceResponse(loginResponse) {
    return new DoLoginServiceResponse ({
        email: loginResponse.data.user.email,
        createdAt: loginResponse.data.user.createdAt,
        apiToken: loginResponse.data.session.apiToken,
        sessionId: loginResponse.data.session.id
    })
}

export {
    DoLoginService, DoLoginServiceRequest, DoLoginServiceResponse
}