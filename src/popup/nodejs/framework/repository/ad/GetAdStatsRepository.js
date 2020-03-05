class GetAdStatsRepository {
    constructor(axios) {
        this._axios = axios
    }

    async findStatsByAdId (getAdStatsRepositoryRequest) {
        console.log(">>>GetAdStatsRepository.findStatsByAdId")
        const headers = {
            "Content-Type": "application/json",
            "mav": "2",
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        }
        const url = `https://www.milanuncios.com/api/v3/ads/${getAdStatsRepositoryRequest.adId}/detailed-stats`
        console.log(">>>GetAdStatsRepository.findStatsByAdId" + url )
        const axiosRequest = {
            method: 'get',
            url: url,
            headers: headers
        }
        return this._axios(axiosRequest)
    }
}

class GetAdStatsRepositoryRequest{
    constructor(adId) {
        this.adId = adId
    }
}

export {
    GetAdStatsRepository, GetAdStatsRepositoryRequest
}