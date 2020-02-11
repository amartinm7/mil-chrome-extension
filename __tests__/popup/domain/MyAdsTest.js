const assert = require("assert")
import myAds from '../../../src/popup/domain/MyAds'

console.log("welcome! MyAds test")

describe('jsonAdToAdTransformer', function() {
    describe('transform', function() {
        it('should return a valid ad', function() {
            const givenJsonAd = [{
                idanuncio: "1",
                titulo: "titulo",
                precio: "1000",
                fecha: "10-10-2020",
                texto: "descripcion del ad",
                fotos: ["https...", "http..."],
                fotos_thumb: ["https...", "http..."],
            }]
            const expectedMyAds = [{
                idanuncio: "1",
                titulo: "titulo",
                precio: "1000",
                fecha: "10-10-2020",
                texto: "descripcion del ad",
                fotos: ["https...", "http..."],
                fotos_thumb: ["https...", "http..."],
                computed_props: {
                    isRenewed: false
                }
            }]
            expect(myAds(givenJsonAd)).toEqual(expectedMyAds)
        })
    })
    describe('bye', function() {
        it('should return an empty ad', function() {
            expect(myAds("")).toEqual([])
        })
    })
})


