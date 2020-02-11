import qs from "querystring";
import axios from "axios";

async function getHeaderAndQueryParams (apiToken){
    console.log(">>>getHeaderAndQueryParams")
    const params =  {
        "r": "30",
        "p": "1",
        "token": apiToken,
    }
    const header = {
        "mav": "2",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        'Content-Type': 'application/json'
    }
    console.log(">>>getHeaderAndQueryParams:" + JSON.stringify({header, params}))
    return new Promise(
        (resolve, reject) => resolve( {header, params})
    )
}

async function getAds (header, params) {
    console.log(">>>getAds:" + JSON.stringify({header, params}))
    const urlMisAnuncios = `https://www.milanuncios.com/api/v2/misanuncios/misanuncios.php?${qs.stringify(params)}`
    console.log(">>>getAds:" + urlMisAnuncios)
    return axios({
        method: 'post',
        url: urlMisAnuncios,
        data: params,
        headers: header,
        config: { withCredentials: true }
    })
}

async function findAll (apiToken) {
    console.log(">>>loadPage")
    if (apiToken === undefined || apiToken === ""){ return }
    const {header, params} = await getHeaderAndQueryParams(apiToken)
    console.log("getHeaderAndQueryParams:" + JSON.stringify({header, params}))
    const adsResponse = await getAds(header, params)
    return new Promise(
        (resolve, reject) => resolve( adsResponse))
}

export default findAll