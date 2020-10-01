import {GetCategoriesSuggestedRepositoryRequest} from "../../framework/repository/category/GetCategoriesSuggestedRepository";
import {CategoriesSuggested} from "../../adomain/categories/CategoriesSuggested";

class GetCategoriesSuggestedService{
    constructor(getCategoriesSuggestedRepository) {
        this._getCategoriesSuggestedRepository = getCategoriesSuggestedRepository
    }

    async execute (getCategoriesSuggestedServiceRequest) {
        console.log(">>>getCategoriesSuggestedService")
        if (!!getCategoriesSuggestedServiceRequest.apiToken == false){ return }
        const adsResponse = await this._getCategoriesSuggestedRepository.getSuggestions (
            new GetCategoriesSuggestedRepositoryRequest( getCategoriesSuggestedServiceRequest.apiToken, getCategoriesSuggestedServiceRequest.keyword )
        )
        const suggestedCategories = new GetCategoriesSuggestedServiceResponse( {
            suggestedCategories: TransformToMyAdsService.toCategoriesSuggested(adsResponse.suggestedCategories)
        } )
        return suggestedCategories
    }
}

class GetCategoriesSuggestedServiceRequest{
    constructor(apiToken, keyword) {
        this.apiToken = apiToken
        this.keyword = keyword
    }
}

class GetCategoriesSuggestedServiceResponse{
    constructor({suggestedCategories}) {
        this.suggestedCategories = suggestedCategories
    }
}

class TransformToMyAdsService {
    constructor() {
    }

    static toCategoriesSuggested(suggestedCategories) {
        return suggestedCategories.map( item => new CategoriesSuggested({...item}) )
    }
}

export { GetCategoriesSuggestedService, GetCategoriesSuggestedServiceRequest, GetCategoriesSuggestedServiceResponse }