class GetMyFavouriteAdsRepository {
    constructor(axios,querystring) {
        this._axios = axios
        this._querystring = querystring
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

    async findAllMyFavouritesAds(getMyFavouriteAdsRepositoryRequest) {
        if (getMyFavouriteAdsRepositoryRequest.apiToken === undefined || getMyFavouriteAdsRepositoryRequest.apiToken === ""){ return }
        const {header, params} = await this._getHeaderAndQueryParams(getMyFavouriteAdsRepositoryRequest.apiToken)
        console.log(">>>findAllMyFavouritesAds:" + JSON.stringify({header, params}))
        const urlMisFavoritos = `https://www.milanuncios.com/api/v2/favoritos/favoritos.php`
        console.log(">>>findAllMyFavouritesAds urlMisFavoritos:" + urlMisFavoritos)
        const axiosRequest = {
            method: 'post',
            url: urlMisFavoritos,
            headers: header,
            data: this._querystring.stringify(params),
            config: { withCredentials: true }
        }
        return this._axios(axiosRequest)
    }
}

class GetMyFavouriteAdsRepositoryRequest{
    constructor(apiToken) {
        this.apiToken = apiToken
    }
}

export {
    GetMyFavouriteAdsRepository, GetMyFavouriteAdsRepositoryRequest
}