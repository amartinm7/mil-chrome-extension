class DoLoginRepository {
    constructor(axios) {
        this._axios = axios
    }

    async _getHeaderAndData(email, password) {
        console.log(">>>getHeaderAndData")
        const data = {
            "identifier": email,
            "password": password,
            "rememberMe": "true"
        }
        const header = {
            "Content-Type": "application/json",
            "mav": "2",
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        }
        console.log(">>>getHeaderAndData:" + JSON.stringify({header, data}))
        return new Promise(
            (resolve, reject) => resolve({header, data})
        )
    }

    async doLogin(doLoginRepositoryRequest) {
        console.log(">>>user")
        const url = "https://www.milanuncios.com/api/v3/logins"
        const {header, data} = await this._getHeaderAndData( ...doLoginRepositoryRequest )
        console.log(`>>>doLogin ${JSON.stringify({header, data})}`)
        const axiosRequest = {
            method: 'post',
            url: url,
            data: data,
            headers: header,
            config: {withCredentials: true}
        }
        return this._axios(axiosRequest)
    }
}

class DoLoginRepositoryRequest{
    constructor({email, password}) {
        this.email = email
        this.password = password
    }
}

export {
    DoLoginRepository, DoLoginRepositoryRequest
}