class GetMyAdsRepository {
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
            'Content-Type': 'application/json'
        }
        console.log(">>>getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        return new Promise(
            (resolve, reject) => resolve( {header, params})
        )
    }

    async findAllAdsByUserId (getMyAdsRepositoryRequest) {
        console.log(">>>findAllAdsByUserId")
        if (getMyAdsRepositoryRequest.apiToken === undefined || getMyAdsRepositoryRequest.apiToken === ""){ return }
        const {header, params} = await this._getHeaderAndQueryParams(getMyAdsRepositoryRequest.apiToken)
        const urlMisAnuncios = `https://www.milanuncios.com/api/v2/misanuncios/misanuncios.php?${this._querystring.stringify(params)}`
        console.log(">>>findAllAdsByUserId:" + urlMisAnuncios)
        const axiosRequest = {
            method: 'post',
            url: urlMisAnuncios,
            data: params,
            headers: header,
            config: { withCredentials: true }
        }
        return this._axios(axiosRequest)
    }
}

class GetMyAdsRepositoryRequest{
    constructor(apiToken) {
        this.apiToken = apiToken
    }
}

export {
    GetMyAdsRepository, GetMyAdsRepositoryRequest
}