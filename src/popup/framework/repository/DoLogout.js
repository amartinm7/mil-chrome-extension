import axios from "axios";

async function doLogout(apiToken) {
    console.log(">>>doLogout")
    const url = "https://www.milanuncios.com/api/v3/logout"
    return axios({
        method: 'post',
        url: url,
        config: { withCredentials: true }
    })
}

export default doLogout