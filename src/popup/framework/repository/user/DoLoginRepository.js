import axios from "axios"

export default class DoLoginRepository {
    constructor() {
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

    async doLogin(credentials) {
        console.log(">>>user")
        const {email, password} = credentials
        const url = "https://www.milanuncios.com/api/v3/logins"
        const {header, data} = await this._getHeaderAndData(email, password)
        console.log(`>>>doLogin ${JSON.stringify({header, data})}`)
        return axios({
            method: 'post',
            url: url,
            data: data,
            headers: header,
            config: {withCredentials: true}
        })
    }
}