class DoLoginWithCookiesRepository {
    constructor(axios) {
        this._axios = axios
    }

    async doLoginWithCurrentCookies() {
        console.log(">>>doLoginWithCurrentCookies")
        const url = "https://www.milanuncios.com/api/v3/sessions/current"
        const headers = {
            "Content-Type": "application/json",
            "mav": "2",
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        }
        console.log(`>>>doLoginWithCurrentCookies ${JSON.stringify({headers})}`)
        const axiosRequest = {
            method: 'get',
            url: url,
            headers: headers,
            config: {withCredentials: true}
        }
        return this._axios(axiosRequest)
    }
}

export {
    DoLoginWithCookiesRepository
}