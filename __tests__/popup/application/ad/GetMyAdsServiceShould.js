import MyAds from "../../../../src/popup/domain/ad/MyAds";
const assert = require("assert")
import {GetMyAdsService, GetMyAdsServiceRequest} from '../../../../src/popup/application/ad/GetMyAdsService'
import GetMyAdsRepository from "../../../../src/popup/framework/repository/ad/GetMyAdsRepository"
import global from "../../global.json"
import TransformToMyAdsService from "../../../../src/popup/framework/transformers/TransformToMyAdsService"

console.log("welcome! GetYourAdsService test")

jest.mock("../../../../src/popup/framework/repository/ad/GetMyAdsRepository");

describe('GetMyAdsService', function() {
    describe('findAll', function() {
        it('should return a valid ad', async function() {
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
            const expectedAds = {
                "ads": [ new MyAds({'idanuncio':'1', 'titulo':'titulo', 'precio':'100', 'fecha': 'fecha', 'texto':'texto','fotos':[], 'fotos_thumb':[] })]
            }
            const mockGetMyAdsRepository = jest.fn();
            GetMyAdsRepository.prototype.findAllAdsByUserId = mockGetMyAdsRepository;
            mockGetMyAdsRepository.mockReturnValue(Promise.resolve(mockedAds));
            const ads = await new GetMyAdsService(
                new GetMyAdsRepository(), new TransformToMyAdsService()
            ).execute(
                new GetMyAdsServiceRequest(global.apiToken)
            )
            console.log(JSON.stringify(ads))
            //ASSERTS
            expect(ads).not.toBeUndefined()
            expect(ads).toEqual(expectedAds)
        })
    })
})