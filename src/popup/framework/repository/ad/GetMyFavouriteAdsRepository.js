import axios from "axios";
import qs from "querystring";

export default class GetMyFavouriteAdsRepository {
    constructor() {
    }

    async _getHeaderAndQueryParams (apiToken){
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
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        console.log(">>>getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        return new Promise(
            (resolve, reject) => resolve( {header, params})
        )
    }

    async _getFavoriteAds (header, params) {
        console.log(">>>getFavoriteAds:" + JSON.stringify({header, params}))
        const urlMisFavoritos = `https://www.milanuncios.com/api/v2/favoritos/favoritos.php`
        console.log(">>>getFavoriteAds urlMisFavoritos:" + urlMisFavoritos)
        return axios({
            method: 'post',
            url: urlMisFavoritos,
            headers: header,
            data: qs.stringify(params),
            config: { withCredentials: true }
        })
    }

    async findAllMyFavouritesAds(apiToken) {
        if (apiToken === undefined || apiToken === ""){ return }
        const {header, params} = await this._getHeaderAndQueryParams(apiToken)
        console.log("getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        const adsResponse = await this._getFavoriteAds(header, params)
        return new Promise(
            (resolve, reject) => resolve( adsResponse))
    }
}