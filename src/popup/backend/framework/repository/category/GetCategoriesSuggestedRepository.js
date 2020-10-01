
class GetCategoriesSuggestedRepository {
    constructor(axios,querystring, fetch) {
        this._axios = axios
        this._querystring = querystring
        this._fetch = fetch
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
            'Content-Type': 'application/x-www-form-urlencoded',
            'referer': "www.milanuncios.com"
        }
        console.log(">>>getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        return new Promise(
            (resolve, reject) => resolve( {header, params})
        )
    }

    async getSuggestionsAxios(getCategoriesSuggestedRepositoryRequest) {
        if (getCategoriesSuggestedRepositoryRequest.apiToken === undefined || getCategoriesSuggestedRepositoryRequest.apiToken === ""){ return }
        const {header, params} = await this._getHeaderAndQueryParams(getCategoriesSuggestedRepositoryRequest.apiToken)
        console.log(">>>getSuggestions:" + JSON.stringify({header, params}))
        const urlCategorySuggester = `https://ms-ma--search-gateway.spain.advgo.net/v1/category-suggestions?text=${getCategoriesSuggestedRepositoryRequest.keyword}`
        console.log(">>>getSuggestions urlCategorySuggester:" + urlCategorySuggester)
        const axiosRequest = {
            method: 'get',
            mode: 'no-cors',
            url: urlCategorySuggester,
            headers: header,
            data: this._querystring.stringify(params),
            config: { withCredentials: true }
        }
        return this._axios(axiosRequest)
    }

    async getSuggestions(getCategoriesSuggestedRepositoryRequest) {
        if (getCategoriesSuggestedRepositoryRequest.apiToken === undefined || getCategoriesSuggestedRepositoryRequest.apiToken === ""){ return }
        const {header, params} = await this._getHeaderAndQueryParams(getCategoriesSuggestedRepositoryRequest.apiToken)
        console.log(">>>getSuggestions:" + JSON.stringify({header, params}))
        const urlCategorySuggester = `https://ms-ma--search-gateway.spain.advgo.net/v1/category-suggestions?text=${getCategoriesSuggestedRepositoryRequest.keyword}`
        console.log(">>>getSuggestions urlCategorySuggester:" + urlCategorySuggester)

        const result  = await fetch(urlCategorySuggester, {
            method: 'get'
        })
        const json = await result.json()
        return json
    }
}

class GetCategoriesSuggestedRepositoryRequest{
    constructor(apiToken, keyword) {
        this.apiToken = apiToken
        this.keyword = keyword
    }
}

export {
    GetCategoriesSuggestedRepository, GetCategoriesSuggestedRepositoryRequest
}