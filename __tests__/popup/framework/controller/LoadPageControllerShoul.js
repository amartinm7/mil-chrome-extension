import {DoLoginWithCookiesRepository} from "../../../../src/popup/backend/framework/repository/user/DoLoginWithCookiesRepository";
import {GetMyAdsServiceResponse} from "../../../../src/popup/backend/application/ad/GetMyAdsService";
import {GetMyAdsRepository} from "../../../../src/popup/backend/framework/repository/ad/GetMyAdsRepository";
import {GetMyFavouriteAdsServiceResponse} from "../../../../src/popup/backend/application/ad/GetMyFavouriteAdsService";
import MyFavouriteAds from "../../../../src/popup/backend/adomain/ad/MyFavouriteAds";
import {GetMyFavouriteAdsRepository} from "../../../../src/popup/backend/framework/repository/ad/GetMyFavouriteAdsRepository";
import {
    LoadPageControllerRequest,
    LoadPageControllerResponse
} from "../../../../src/popup/backend/framework/controller/ad/LoadPageController";
import ControllerFacadeFactoryBean from "../../../../src/popup/backend/framework/ControllerFacadeFactoryBean";
import {DoLoginWithCookiesServiceResponse} from "../../../../src/popup/backend/application/user/DoLoginWithCookiesService";
import MyAds from "../../../../src/popup/backend/adomain/ad/MyAds";

const assert = require("assert")

console.log("welcome! LoadPageController test")

describe('LoadPageController', function() {
    describe('execute', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const givenCredentials = {
                email: "antonio.martin@schibsted.com",
                password: "Schibsted18"
            }

            //WHEN
            const expectedDoLoginWithCookiesServiceResponse = new DoLoginWithCookiesServiceResponse({
                email: "",
                createdAt: "",
                apiToken:'apiToken'
            })

            //MOCK
            const mockedDoLoginWithCookiesRepositoryResponse = {
                data: {
                    apiToken:'apiToken'
                }
            }
            const mockDoLoginWithCookiesRepository = jest.fn();
            DoLoginWithCookiesRepository.prototype.doLoginWithCurrentCookies = mockDoLoginWithCookiesRepository;
            mockDoLoginWithCookiesRepository.mockReturnValue(Promise.resolve(mockedDoLoginWithCookiesRepositoryResponse));

            const mockedAds = {
                data: {
                    data:{
                        anuncios: [
                            {'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] }
                        ]
                    }
                }
            }
            //WHEN
            const expectedAds = new GetMyAdsServiceResponse({
                "ads": [ new MyAds({'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] })]
            })

            const mockGetMyAdsRepository = jest.fn();
            GetMyAdsRepository.prototype.findAllAdsByUserId = mockGetMyAdsRepository;
            mockGetMyAdsRepository.mockReturnValue(Promise.resolve(mockedAds));

            const mockedMyFavouriteAdsRepositoryResponse = {
                data: {
                    data:{
                        anuncios: [
                            {'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] }
                        ]
                    }
                }
            }
            //WHEN
            const expectedFavouriteAds = new GetMyFavouriteAdsServiceResponse({
                "ads": [ new MyFavouriteAds({'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] })]
            })
            const mockGetMyFavouriteAdsRepository = jest.fn();
            GetMyFavouriteAdsRepository.prototype.findAllMyFavouritesAds = mockGetMyFavouriteAdsRepository;
            mockGetMyFavouriteAdsRepository.mockReturnValue(Promise.resolve(mockedMyFavouriteAdsRepositoryResponse));

            const expected = new LoadPageControllerResponse({
                current: expectedDoLoginWithCookiesServiceResponse.current,
                ads: expectedAds.ads,
                favouriteAds: expectedFavouriteAds.ads
            })

            const loadPageControllerResponse = await ControllerFacadeFactoryBean.loadPageController().execute(
                new LoadPageControllerRequest({...givenCredentials})
            )
            console.log(JSON.stringify(loadPageControllerResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(loadPageControllerResponse))
            expect(loadPageControllerResponse).not.toBeUndefined()
            expect(loadPageControllerResponse).toEqual(expected)
        })
    })
})
