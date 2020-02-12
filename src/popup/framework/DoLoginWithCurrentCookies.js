import axios from "axios";

function doLoginWithCurrentCookies(){
    console.log(">>>doLoginWithCurrentCookies")
    const url = "https://www.milanuncios.com/api/v3/sessions/current"
    const headers = {
        "Content-Type": "application/json",
        "mav": "2",
        "Accept": "*/*",
        "Cache-Control": "no-cache"
    }
    console.log(JSON.stringify(headers))
    return axios({
        method: 'get',
        url: url,
        headers: headers,
        config: { withCredentials: true }
    })
}

export default doLoginWithCurrentCookies