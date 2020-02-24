import axios from "axios"
import qs from 'querystring'

class DoRenewAdRepository {
    async _getHeaderAndQueryParams (apiToken,sessionId){
        console.log(">>>DoRenewAdRepository.getHeaderAndQueryParams")
        const params =  {
            "tokenRenew" : ' '
        }
        const header = {
            "mav": "2",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            'Content-Type': 'application/json',
            'token': `Basic ${apiToken}`,
            'Authorization': apiToken
        }
        console.log(">>>DoRenewAdRepository.getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        return new Promise(
            (resolve, reject) => resolve( {header, params})
        )
    }

    async doRenewAd (doRenewAdRepositoryRequest) {
        console.log(">>>DoRenewAdRepository.doRenewAd")
        const vm = this
        const { header, params } = await this._getHeaderAndQueryParams(doRenewAdRepositoryRequest.apiToken, doRenewAdRepositoryRequest.sessionId)
        console.log("h&qp:" + JSON.stringify({ header, params }))
        const url = `https://www.milanuncios.com/v3/ads/${doRenewAdRepositoryRequest.adId}/renew`
        const axiosRequest = {
            method: 'post',
            url: url,
            data: params,
            headers: header,
            config: { withCredentials: true }
        }
        console.log(`axiosRequest: ${JSON.stringify(axiosRequest)}`)
        return axios(axiosRequest)
    }
}

class DoRenewAdRepositoryRequest{
    constructor({apiToken, adId}) {
        this.apiToken = apiToken,
        this.adId = adId
    }
}

export {
    DoRenewAdRepository, DoRenewAdRepositoryRequest
}