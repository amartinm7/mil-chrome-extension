
import global from "../../global"
import DoLoginRepository from "../../../../src/popup/framework/repository/user/DoLoginRepository";
import MyAds from "../../../../src/popup/domain/ad/MyAds";
import GetMyAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyAdsRepository";
import GetMyFavouriteAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyFavouriteAdsRepository";
import {GetMyFavouriteAdsServiceResponse} from "../../../../src/popup/application/ad/GetMyFavouriteAdsService";
import {GetMyAdsServiceResponse} from "../../../../src/popup/application/ad/GetMyAdsService";
import MyFavouriteAds from "../../../../src/popup/domain/ad/MyFavouriteAds";
import {
     DoLoginControllerRequest,
    DoLoginControllerResponse
} from "../../../../src/popup/framework/controller/DoLoginController";
import {DoLoginServiceResponse} from "../../../../src/popup/application/user/DoLoginService";
import ControllerFacadeFactoryBean from "../../../../src/popup/framework/ControllerFacadeFactoryBean";
import {SaveStorageRepository} from "../../../../src/popup/framework/repository/storage/SaveStorageRepository";
const assert = require("assert")

import '../repository/using-localstorage.test.js'
SaveStorageRepository.prototype.$chromeExtensionRef = global

console.log("welcome! DoLoginService test")

describe('LoadPageController', function() {
    describe('execute', function() {
        it('should return a valid response', async function() {
            //GIVEN
            const mockedDoLoginRepositoryResponse = {
                data: {
                    user:{
                        email: 'antonio.martin@schibsted.com',
                        createdAt: '2020-02-13T00:32:59+0100'
                    },
                    session: {
                        apiToken:'apiToken',
                        id: 'sessionId'
                    }
                }
            }
            //WHEN
            const expectedDoLoginServiceResponse = new DoLoginServiceResponse({
                email: "antonio.martin@schibsted.com",
                createdAt: "2020-02-13T00:32:59+0100",
                apiToken:'apiToken',
                sessionId: 'sessionId'
            })
            //WHEN
            const mockDoLoginRepository = jest.fn();
            DoLoginRepository.prototype.doLogin = mockDoLoginRepository;
            mockDoLoginRepository.mockReturnValue(Promise.resolve(mockedDoLoginRepositoryResponse));
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

            const expected = new DoLoginControllerResponse(
                {current: expectedDoLoginServiceResponse.current, ads: expectedAds.ads, favouriteAds: expectedFavouriteAds.ads}

            )

            const doLoginControllerResponse = await ControllerFacadeFactoryBean.doLoginController().execute(
                new DoLoginControllerRequest({...global.credentials})
            )
            //ASSERTS
            console.log(">>>" + JSON.stringify(doLoginControllerResponse))
            expect(doLoginControllerResponse).not.toBeUndefined()
            expect(doLoginControllerResponse).toEqual(expected)
        })
    })
})
