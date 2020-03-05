import qs from 'querystring'

class DoAdSearchController {
    constructor(saveStorageService) {
        this._saveStorageService = saveStorageService
    }

    async execute(doAdSearchControllerRequest){
        const sanitizedKeyword = this._sanitizeKeyword(doAdSearchControllerRequest.keywords)
        console.log("sanitizedKeyword " + sanitizedKeyword)
        const sanitizedKeywordWithoutHasta = this._getHasta(sanitizedKeyword)
        console.log(JSON.stringify(sanitizedKeywordWithoutHasta))
        const sanitizedKeywordWithoutDesde = this._getDesde(sanitizedKeywordWithoutHasta)
        console.log(JSON.stringify(sanitizedKeywordWithoutDesde))
        //saveStorageService.execute()
        const url = this._composeUrl(sanitizedKeywordWithoutDesde)
        console.log("url " + JSON.stringify(url))
        return new DoAdSearchControllerResponse({ url })
    }

    _sanitizeKeyword(keywords){
        return keywords.split(" ").join("-")
    }

    _getDesde(sanitizedKeywordWithoutHasta){
        if ( sanitizedKeywordWithoutHasta.sanitizedKeyword.includes("-desde-") ) {
            const sanitizedKeywordWithoutDesde = sanitizedKeywordWithoutHasta.sanitizedKeyword.substring(0,sanitizedKeywordWithoutHasta.sanitizedKeyword.indexOf("-desde-"))
            const desde = sanitizedKeywordWithoutHasta.sanitizedKeyword.substring(sanitizedKeywordWithoutHasta.sanitizedKeyword.indexOf("-desde-")).split("-")[2]
            return {
                "sanitizedKeyword": sanitizedKeywordWithoutDesde,
                "price": Object.assign({}, sanitizedKeywordWithoutHasta.price, {desde})
            }
        }
        return {
            "sanitizedKeyword": sanitizedKeywordWithoutHasta.sanitizedKeyword,
            "price": sanitizedKeywordWithoutHasta.price
        }
    }

    _getHasta(sanitizedKeyword){
        if ( sanitizedKeyword.includes("-hasta-") ) {
            const sanitizedKeywordWithoutDesde = sanitizedKeyword.substring(0,sanitizedKeyword.indexOf("-hasta-"))
            const hasta = sanitizedKeyword.substring(sanitizedKeyword.indexOf("-hasta-")).split("-")[2]
            return {
                "sanitizedKeyword": sanitizedKeywordWithoutDesde,
                "price": {
                    "hasta": hasta
                }
            }
        }
        return {
            "sanitizedKeyword": sanitizedKeyword,
            "price": {}
        }
    }

    _composeUrl(sanitizedKeywordWithoutDesde){
        const url = "https://www.milanuncios.com/anuncios"
        if ( sanitizedKeywordWithoutDesde.sanitizedKeyword.includes("-en-") ) {
            // caso citroen c3 puretech en madrid
            const productSlugger = sanitizedKeywordWithoutDesde.sanitizedKeyword.substring(0,sanitizedKeywordWithoutDesde.sanitizedKeyword.indexOf("-en-"))
            const locationSlugger = sanitizedKeywordWithoutDesde.sanitizedKeyword.substring(sanitizedKeywordWithoutDesde.sanitizedKeyword.indexOf("-en-"))
            return `${url}${locationSlugger}/${productSlugger}.htm?fromSearch=1&${qs.stringify(sanitizedKeywordWithoutDesde.price)}`
        } else {
            //caso general
            return `${url}/${sanitizedKeywordWithoutDesde.sanitizedKeyword}.htm?fromSearch=1&${qs.stringify(sanitizedKeywordWithoutDesde.price)}`
        }
    }
}

class DoAdSearchControllerRequest{
    constructor({keywords}) {
        this.keywords = keywords
    }
}

class DoAdSearchControllerResponse{
    constructor({url}) {
        this.url = url
    }
}

export {
    DoAdSearchControllerRequest, DoAdSearchControllerResponse, DoAdSearchController
}

