import {GetCategoriesSuggestedRepository} from "../../../../src/popup/backend/framework/repository/category/GetCategoriesSuggestedRepository";
import {
    GetCategoriesSuggestedService,
    GetCategoriesSuggestedServiceRequest, GetCategoriesSuggestedServiceResponse
} from "../../../../src/popup/backend/application/category/GetCategoriesSuggestedService";

const assert = require("assert")

console.log("welcome! GetCategoriesSuggestedService test")

describe('GetCategoriesSuggestedService', function() {
    describe('execute', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }
            const keyword = 'iphone'

            const mockGetCategoriesSuggestedRepositoryResponse = {
                suggestedCategories: [
                    {
                        keyword: "iphone",
                        score: 0.6917635,
                        categories: [
                            {
                                id: "83",
                                name: "Telefonía",
                                slug: "telefonia"
                            },
                            {
                                id: "111",
                                name: "Móviles",
                                slug: "moviles"
                            },
                            {
                                id: "112",
                                name: "Teléfonos móviles",
                                slug: "telefonos-moviles"
                            },
                            {
                                id: "1270",
                                name: "iPhone",
                                slug: "iphone"
                            }
                        ],
                        filters: {
                            category: {
                                id: "1270",
                                name: "iPhone",
                                slug: "iphone"
                            },
                            keywords: {
                                value: "iphone",
                                legacySearch: true,
                                slug: "iphone"
                            }
                        }
                    }]
            }
            //WHEN
            const expected = new GetCategoriesSuggestedServiceResponse({
                suggestedCategories: [
                    {
                        keyword: "iphone",
                        score: 0.6917635,
                        categories: [
                            {
                                id: "83",
                                name: "Telefonía",
                                slug: "telefonia"
                            },
                            {
                                id: "111",
                                name: "Móviles",
                                slug: "moviles"
                            },
                            {
                                id: "112",
                                name: "Teléfonos móviles",
                                slug: "telefonos-moviles"
                            },
                            {
                                id: "1270",
                                name: "iPhone",
                                slug: "iphone"
                            }
                        ],
                        filters: {
                            category: {
                                id: "1270",
                                name: "iPhone",
                                slug: "iphone"
                            },
                            keywords: {
                                value: "iphone",
                                legacySearch: true,
                                slug: "iphone"
                            }
                        }
                    }]
            })
            const mockGetCategoriesSuggestedRepository = jest.fn();
            GetCategoriesSuggestedRepository.prototype.getSuggestions = mockGetCategoriesSuggestedRepository;
            mockGetCategoriesSuggestedRepository.mockReturnValue(Promise.resolve(mockGetCategoriesSuggestedRepositoryResponse));
            const getCategoriesSuggestedServiceResponse = await new GetCategoriesSuggestedService(
                new GetCategoriesSuggestedRepository()
            ).execute(
                new GetCategoriesSuggestedServiceRequest(givenCredentials,keyword)
            )
            console.log(JSON.stringify(getCategoriesSuggestedServiceResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(getCategoriesSuggestedServiceResponse))
            expect(getCategoriesSuggestedServiceResponse).not.toBeUndefined()
            expect(getCategoriesSuggestedServiceResponse).toEqual(expected)
        })
    })
})
