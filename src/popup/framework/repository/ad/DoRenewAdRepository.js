import axios from "axios"
import qs from 'querystring'

class DoRenewAdRepository {
    async _getHeaderAndQueryParams (apiToken){
        console.log(">>>getHeaderAndQueryParams")
        const params =  {
            "r": "30",
            "p": "1",
            "token": apiToken,
            "tokenRenew" : apiToken
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

    async doRenewAd (doRenewAdRepositoryRequest) {
        console.log(">>>doRenewAd")
        const vm = this
        const { header, params } = await this._getHeaderAndQueryParams(doRenewAdRepositoryRequest.apiToken)
        console.log("h&qp:" + JSON.stringify({ header, params }))
        const url = `https://www.milanuncios.com/api/v3/adrenew/${doRenewAdRepositoryRequest.adId}`
        return axios({
            method: 'post',
            url: url,
            data: params,
            headers: header,
            config: { withCredentials: true }
        })
    }
}

class DoRenewAdRepositoryRequest{
    constructor({apiToken, adId}) {
        this.apiToken = apiToken
        this.adId = adId
    }

}

export {
    DoRenewAdRepository, DoRenewAdRepositoryRequest
}