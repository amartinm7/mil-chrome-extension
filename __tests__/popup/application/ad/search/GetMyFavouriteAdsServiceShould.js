import {
    GetMyFavouriteAdsService, GetMyFavouriteAdsServiceRequest,
    GetMyFavouriteAdsServiceResponse
} from "../../../../../src/popup/nodejs/application/ad/GetMyFavouriteAdsService";
import MyAds from "../../../../../src/popup/nodejs/adomain/ad/MyAds";
import {GetMyFavouriteAdsRepository} from "../../../../../src/popup/nodejs/framework/repository/ad/GetMyFavouriteAdsRepository";

const assert = require("assert")

console.log("welcome! GetMyFavouriteAdsService test")

describe('GetMyFavouriteAdsService', function() {
    describe('getMyFavouritesAdsRepository', function() {
        it('should return a valid ad', async function() {
            //GIVEN
            const mockedMyFavouriteAdsRepositoryResponse = {
                data: {
                    data:{
                        anuncios: [
                            {
                                'idanuncio':'1',
                                'titulo':'titulo',
                                'precio':'100',
                                'fecha': 'fecha',
                                'texto':'texto',
                                'fotos':[],
                                'fotos_thumb':[],
                                'localidad': 'Leganes',
                                'provincia': 'Madrid',
                                'categoria': 'alfombra'
                            }
                        ]
                    }
                }
            }
            //WHEN
            const expectedAds = new GetMyFavouriteAdsServiceResponse({
                "ads": [ new MyAds({
                    'idanuncio':'1',
                    'titulo':'titulo',
                    'precio':'100',
                    'fecha': 'fecha',
                    'texto':'texto',
                    'fotos':[],
                    'fotos_thumb':[],
                    'localidad': 'Leganes',
                    'provincia': 'Madrid',
                    'categoria': 'alfombra'
                })]
            })
            const mockGetMyFavouriteAdsRepository = jest.fn();
            GetMyFavouriteAdsRepository.prototype.findAllMyFavouritesAds = mockGetMyFavouriteAdsRepository;
            mockGetMyFavouriteAdsRepository.mockReturnValue(Promise.resolve(mockedMyFavouriteAdsRepositoryResponse));
            const ads = await new GetMyFavouriteAdsService(
                new GetMyFavouriteAdsRepository()
            ).execute(
                new GetMyFavouriteAdsServiceRequest("anyToken")
            )
            console.log(JSON.stringify(ads))
            //ASSERTS
            expect(ads).not.toBeUndefined()
            expect(ads).toEqual(expectedAds)
        })
    })
})