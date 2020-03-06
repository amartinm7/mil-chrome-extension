class DoLogoutRepository {
    constructor(axios) {
        this._axios = axios
    }

    async doLogout() {
        console.log(">>>doLogout")
        const url = "https://www.milanuncios.com/api/v3/logout"
        const axiosRequest = {
            method: 'post',
            url: url,
            config: { withCredentials: true }
        }
        return this._axios(axiosRequest)
    }
}

export {
    DoLogoutRepository
}