import global from "../../global"
import {
    LoadPageController,
    LoadPageControllerRequest, LoadPageControllerResponse
} from "../../../../src/popup/framework/controller/LoadPageController";
import {DoLoginWithCookiesServiceResponse} from "../../../../src/popup/application/user/DoLoginWithCookiesService";
import DoLoginWithCookiesRepository from "../../../../src/popup/framework/repository/user/DoLoginWithCookiesRepository";
import MyAds from "../../../../src/popup/domain/ad/MyAds";
import GetMyAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyAdsRepository";
import GetMyFavouriteAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyFavouriteAdsRepository";
import {GetMyFavouriteAdsServiceResponse} from "../../../../src/popup/application/ad/GetMyFavouriteAdsService";
import {GetMyAdsServiceResponse} from "../../../../src/popup/application/ad/GetMyAdsService";
import MyFavouriteAds from "../../../../src/popup/domain/ad/MyFavouriteAds";
const assert = require("assert")

import '../repository/using-localstorage.test.js'
import {SaveStorageRepository} from "../../../../src/popup/framework/repository/storage/SaveStorageRepository";
import ControllerFacadeFactoryBean from "../../../../src/popup/framework/ControllerFacadeFactoryBean";
SaveStorageRepository.prototype.$chromeExtensionRef = global

console.log("welcome! DoLoginService test")


describe('LoadPageController', function() {
    describe('execute', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const mockedDoLoginWithCookiesRepositoryResponse = {
                data: {
                    apiToken:'apiToken'
                }
            }
            //WHEN
            const expectedDoLoginWithCookiesServiceResponse = new DoLoginWithCookiesServiceResponse({
                email: "",
                createdAt: "",
                apiToken:'apiToken'
            })
            const mockDoLoginWithCookiesRepository = jest.fn();
            DoLoginWithCookiesRepository.prototype.doLoginWithCurrentCookies = mockDoLoginWithCookiesRepository;
            mockDoLoginWithCookiesRepository.mockReturnValue(Promise.resolve(mockedDoLoginWithCookiesRepositoryResponse));
            //GIVEN
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

            const expected = new LoadPageControllerResponse(
                {current: expectedDoLoginWithCookiesServiceResponse.current, ads: expectedAds.ads, favouriteAds: expectedFavouriteAds.ads}

            )

            const loadPageControllerResponse = await ControllerFacadeFactoryBean.loadPageController().execute(
                new LoadPageControllerRequest({...global.credentials})
            )
            console.log(JSON.stringify(loadPageControllerResponse))
            //ASSERTS
            console.log(">>>" + JSON.stringify(loadPageControllerResponse))
            expect(loadPageControllerResponse).not.toBeUndefined()
            expect(loadPageControllerResponse).toEqual(expected)
        })
    })
})
