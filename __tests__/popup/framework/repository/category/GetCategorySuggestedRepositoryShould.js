import {
    GetCategoriesSuggestedRepository,
    GetCategoriesSuggestedRepositoryRequest
} from "../../../../../src/popup/backend/framework/repository/category/GetCategoriesSuggestedRepository";
const axios = require('axios')
const querystring = require ("querystring")
const apiToken = require("../../../global.json").apiToken

const assert = require("assert")

console.log("welcome! GetCategoriesSuggestedRepository test")

describe('GetCategoriesSuggestedRepository', function() {
    describe('getSuggestions', function() {
        it('should return a valid category suggestions given a valid iphone keyword', async function() {
            //GIVEN
            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }

            const keyword = 'iphone'

            const getCategoriesSuggestedServiceResponse = await new GetCategoriesSuggestedRepository(
                axios, querystring
            ).getSuggestions(
                new GetCategoriesSuggestedRepositoryRequest(apiToken,keyword)
            )
            console.log(JSON.stringify(getCategoriesSuggestedServiceResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(getCategoriesSuggestedServiceResponse))
            expect(getCategoriesSuggestedServiceResponse).not.toBeUndefined()
        })
    })
})
