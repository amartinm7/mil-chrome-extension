import {GetMyFavouriteAdsService, GetMyFavouriteAdsServiceRequest} from "../../../src/popup/application/GetMyFavouriteAdsService"
import global from "../global.json"
import MyAds from "../../../src/popup/domain/MyAds";
import GetMyFavouriteAdsRepository from "../../../src/popup/framework/repository/GetMyFavouriteAdsRepository";
import TransformToMyFavouriteAdsService from "../../../src/popup/framework/transformers/TransformToMyFavouriteAdsService";
const assert = require("assert")

console.log("welcome! GetMyFavouriteAdsService test")

jest.mock("../../../src/popup/framework/repository/GetMyFavouriteAdsRepository");

describe('GetMyFavouriteAdsService', function() {
    describe('getMyFavouritesAdsRepository', function() {
        it('should return a valid ad', async function() {            //GIVEN
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
            const expectedAds = {
                "ads": [ new MyAds({'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] })]
            }
            const mockGetById = jest.fn();
            GetMyFavouriteAdsRepository.prototype.findAllMyFavouritesAds = mockGetById;
            mockGetById.mockReturnValue(Promise.resolve(mockedAds));
            const ads = await new GetMyFavouriteAdsService(
                new GetMyFavouriteAdsRepository(), new TransformToMyFavouriteAdsService()
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