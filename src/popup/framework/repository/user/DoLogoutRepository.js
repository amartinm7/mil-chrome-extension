import axios from "axios";

export default class DoLogoutRepository {
    async doLogout() {
        console.log(">>>doLogout")
        const url = "https://www.milanuncios.com/api/v3/logout"
        return axios({
            method: 'post',
            url: url,
            config: { withCredentials: true }
        })
    }
}