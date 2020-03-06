const assert = require("assert")
import ControllerFacadeFactoryBean from "../../../../../../src/popup/backend/framework/ControllerFacadeFactoryBean";
import {DoAdSearchControllerRequest} from "../../../../../../src/popup/backend/framework/controller/ad/search/DoAdSearchController";

console.log("welcome! DoAdSearchController test")

describe('DoAdSearchController', function() {
    describe('execute', function() {
        it('should return a valid url with location', async function() {
            const givenKeywords = "citroen c3 puretech en madrid"
            const expectedUrl = "https://www.milanuncios.com/anuncios-en-madrid/citroen-c3-puretech.htm?fromSearch=1&"
            const doAdSearchControllerResponse = await ControllerFacadeFactoryBean.doAdSearchController().execute(
                new DoAdSearchControllerRequest({keywords: givenKeywords})
            )
            console.log(JSON.stringify(doAdSearchControllerResponse))
            //ASSERTS
            expect(doAdSearchControllerResponse.url).toEqual(expectedUrl)
        })
        it('should return a valid url', async function() {
            const givenKeywords = "cristal templado"
            const expectedUrl = "https://www.milanuncios.com/anuncios/cristal-templado.htm?fromSearch=1&"
            const doAdSearchControllerResponse = await ControllerFacadeFactoryBean.doAdSearchController().execute(
                new DoAdSearchControllerRequest({keywords: givenKeywords})
            )
            console.log(JSON.stringify(doAdSearchControllerResponse))
            //ASSERTS
            expect(doAdSearchControllerResponse.url).toEqual(expectedUrl)
        })
        it('should return a valid url desde ', async function() {
            const givenKeywords = "cristal templado desde 100"
            const expectedUrl = "https://www.milanuncios.com/anuncios/cristal-templado.htm?fromSearch=1&desde=100"
            const doAdSearchControllerResponse = await ControllerFacadeFactoryBean.doAdSearchController().execute(
                new DoAdSearchControllerRequest({keywords: givenKeywords})
            )
            console.log(JSON.stringify(doAdSearchControllerResponse))
            //ASSERTS
            expect(doAdSearchControllerResponse.url).toEqual(expectedUrl)
        })
        it('should return a valid url hasta ', async function() {
            const givenKeywords = "cristal templado hasta 100"
            const expectedUrl = "https://www.milanuncios.com/anuncios/cristal-templado.htm?fromSearch=1&hasta=100"
            const doAdSearchControllerResponse = await ControllerFacadeFactoryBean.doAdSearchController().execute(
                new DoAdSearchControllerRequest({keywords: givenKeywords})
            )
            console.log(JSON.stringify(doAdSearchControllerResponse))
            //ASSERTS
            expect(doAdSearchControllerResponse.url).toEqual(expectedUrl)
        })
        it('should return a valid url desde hasta ', async function() {
            const givenKeywords = "cristal templado desde 100 hasta 1000"
            const expectedUrl = "https://www.milanuncios.com/anuncios/cristal-templado.htm?fromSearch=1&hasta=1000&desde=100"
            const doAdSearchControllerResponse = await ControllerFacadeFactoryBean.doAdSearchController().execute(
                new DoAdSearchControllerRequest({keywords: givenKeywords})
            )
            console.log(JSON.stringify(doAdSearchControllerResponse))
            //ASSERTS
            expect(doAdSearchControllerResponse.url).toEqual(expectedUrl)
        })
    })
})
