import {
    GetMyFavouriteAdsService,
    GetMyFavouriteAdsServiceRequest,
    GetMyFavouriteAdsServiceResponse
} from "../../../../src/popup/application/ad/GetMyFavouriteAdsService"
import global from "../../global.json"
import MyAds from "../../../../src/popup/domain/ad/MyAds"
import GetMyFavouriteAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyFavouriteAdsRepository"
import TransformToMyFavouriteAdsService from "../../../../src/popup/framework/transformers/TransformToMyFavouriteAdsService"
import MyFavouriteAds from "../../../../src/popup/domain/ad/MyFavouriteAds";
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
                            {'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] }
                        ]
                    }
                }
            }
            //WHEN
            const expectedAds = new GetMyFavouriteAdsServiceResponse({
                "ads": [ new MyFavouriteAds({'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] })]
            })
            const mockGetMyFavouriteAdsRepository = jest.fn();
            GetMyFavouriteAdsRepository.prototype.findAllMyFavouritesAds = mockGetMyFavouriteAdsRepository;
            mockGetMyFavouriteAdsRepository.mockReturnValue(Promise.resolve(mockedMyFavouriteAdsRepositoryResponse));
            const ads = await new GetMyFavouriteAdsService(
                new GetMyFavouriteAdsRepository(),
                new TransformToMyFavouriteAdsService()
            ).execute(
                new GetMyFavouriteAdsServiceRequest(global.apiToken)
            )
            console.log(JSON.stringify(ads))
            //ASSERTS
            expect(ads).not.toBeUndefined()
            expect(ads).toEqual(expectedAds)
        })
    })
})