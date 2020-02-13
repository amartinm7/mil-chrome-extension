import qs from "querystring";
import axios from "axios";

export default class GetMyAdsRepository {
    constructor() {
    }

    async getHeaderAndQueryParams (apiToken){
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

    async getAds (header, params) {
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

    async findAllAdsByUserId (apiToken) {
        console.log(">>>loadPage")
        if (apiToken === undefined || apiToken === ""){ return }
        const {header, params} = await this.getHeaderAndQueryParams(apiToken)
        console.log("getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        const adsResponse = await this.getAds(header, params)
        return new Promise(
            (resolve, reject) => resolve( adsResponse))
    }
}
