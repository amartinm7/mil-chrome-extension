import axios from "axios";

function logout(apiToken) {
    console.log(">>>logout")
    const url = "https://www.milanuncios.com/api/v3/logout"
    return axios({
        method: 'post',
        url: url,
        config: { withCredentials: true }
    })
}

export default logout