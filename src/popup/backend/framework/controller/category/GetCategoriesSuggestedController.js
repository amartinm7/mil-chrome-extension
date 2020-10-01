import {GetCategoriesSuggestedServiceRequest} from "../../../application/category/GetCategoriesSuggestedService";

class GetCategoriesSuggestedController {
    constructor(getCategoriesSuggestedService) {
        this._getCategoriesSuggestedService = getCategoriesSuggestedService
    }

    async execute( getCategoriesSuggestedControllerRequest ) {
        console.log(">>>GetCategoriesSuggestedController")

        const getCategoriesSuggestedServiceResponse = await this._getCategoriesSuggestedService.execute(
            new GetCategoriesSuggestedServiceRequest(getCategoriesSuggestedControllerRequest.apiToken, getCategoriesSuggestedControllerRequest.keyword)
        )

        console.log(`>>>GetCategoriesSuggestedController after... ${JSON.stringify(getCategoriesSuggestedServiceResponse)}`)
        return new GetCategoriesSuggestedControllerResponse({...getCategoriesSuggestedServiceResponse})
    }
}

class GetCategoriesSuggestedControllerRequest{
    constructor(apiToken, keyword) {
        this.apiToken = apiToken
        this.keyword = keyword
    }
}

class GetCategoriesSuggestedControllerResponse{
    constructor({suggestedCategories}) {
        this.suggestedCategories = suggestedCategories
    }
}


export { GetCategoriesSuggestedController, GetCategoriesSuggestedControllerRequest, GetCategoriesSuggestedControllerResponse }