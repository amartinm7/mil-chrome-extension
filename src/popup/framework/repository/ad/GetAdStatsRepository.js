import axios from "axios"

class GetAdStatsRepository {

    async findStatsByAdId (getAdStatsRepositoryRequest) {
        console.log(">>>GetAdStatsRepository.findStatsByAdId")
        const vm = this
        const headers = {
            "Content-Type": "application/json",
            "mav": "2",
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        }
        const url = `https://www.milanuncios.com/api/v3/ads/${getAdStatsRepositoryRequest.adId}/detailed-stats`
        console.log(">>>GetAdStatsRepository.findStatsByAdId" + url )
        return axios({
            method: 'get',
            url: url,
            headers: headers
        })
    }
}

class GetAdStatsRepositoryRequest{
    constructor({adId}) {
        this.adId = adId
    }
}

export {
    GetAdStatsRepository, GetAdStatsRepositoryRequest
}