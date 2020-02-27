import axios from "axios"
import qs from 'querystring'

class DoRenewAdRepository {
    async _getHeaderAndQueryParams (apiToken){
        console.log(">>>DoRenewAdRepository.getHeaderAndQueryParams")
        const params =  {
            "tokenRenew": " "
        }
        const header = {
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
        const { header, params } = await this._getHeaderAndQueryParams(doRenewAdRepositoryRequest.apiToken)
        const url = `https://www.milanuncios.com/api/v3/ads/${doRenewAdRepositoryRequest.adId}/renew`
        const axiosRequest = {
            method: 'post',
            url: url,
            data: params,
            headers: header
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