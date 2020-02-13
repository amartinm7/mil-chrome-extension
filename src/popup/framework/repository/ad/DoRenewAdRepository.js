import axios from "axios"
import qs from 'querystring'

export default class DoRenewAdRepository {
    async getHeaderAndQueryParams (apiToken){
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

    async doRenewAd (apiToken, adId) {
        console.log(">>>doRenewAd")
        const vm = this
        const { header, params } = await this.getHeaderAndQueryParams(apiToken)
        console.log("h&qp:" + JSON.stringify({ header, params }))
        const url = `https://www.milanuncios.com/api/v3/adrenew/${adId}`
        return axios({
            method: 'post',
            url: url,
            data: params,
            headers: header,
            config: { withCredentials: true }
        })
    }
}