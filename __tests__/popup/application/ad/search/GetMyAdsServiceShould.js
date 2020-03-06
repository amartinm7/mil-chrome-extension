import {GetMyAdsRepository} from "../../../../../src/popup/backend/framework/repository/ad/GetMyAdsRepository";
import {
    GetMyAdsService,
    GetMyAdsServiceRequest,
    GetMyAdsServiceResponse
} from "../../../../../src/popup/backend/application/ad/GetMyAdsService";
import MyAds from "../../../../../src/popup/backend/adomain/ad/MyAds";

const assert = require("assert")

console.log("welcome! GetMyAdsService test")

describe('GetMyAdsService', function() {
    describe('findAll', function() {
        it('should return a valid ad', async function() {
            //GIVEN
            const mockedAds = {
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
            const expectedAds = new GetMyAdsServiceResponse({
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

            const mockGetMyAdsRepository = jest.fn();
            GetMyAdsRepository.prototype.findAllAdsByUserId = mockGetMyAdsRepository;
            mockGetMyAdsRepository.mockReturnValue(Promise.resolve(mockedAds));
            const ads = await new GetMyAdsService(
                new GetMyAdsRepository()
            ).execute(
                new GetMyAdsServiceRequest("anyToken")
            )
            console.log(JSON.stringify(ads))
            //ASSERTS
            expect(ads).not.toBeUndefined()
            expect(ads).toEqual(expectedAds)
        })
    })
})