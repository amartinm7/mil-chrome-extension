class DoAdSearchController {
    constructor(saveStorageService) {
        this._saveStorageService = saveStorageService
    }

    async execute(doAdSearchControllerRequest){
        const sanitizedKeyword = this._sanitizeKeyword(doAdSearchControllerRequest.keywords)
        console.log("sanitizedKeyword " + sanitizedKeyword)
        //saveStorageService.execute()
        const url = this._composeUrl(sanitizedKeyword)
        console.log("url " + JSON.stringify(url))
        return new DoAdSearchControllerResponse({ url })
    }

    _sanitizeKeyword(keywords){
        return keywords.split(" ").join("-")
    }

    // _getDesde(sanitizedKeyword){
    //     if ( sanitizedKeyword.includes("-desde-") ) {
    //         const desde = sanitizedKeyword.substring(sanitizedKeyword.indexOf("-desde-"))
    //         return {
    //             sanitizedKeyword:
    //         }
    //     }
    // }

    _composeUrl(sanitizedKeyword){
        const url = "https://www.milanuncios.com/anuncios"
        if ( sanitizedKeyword.includes("-en-") ) {
            // caso citroen c3 puretech en madrid
            const productSlugger = sanitizedKeyword.substring(0,sanitizedKeyword.indexOf("-en-")) + ".htm?fromSearch=1"
            const locationSlugger = sanitizedKeyword.substring(sanitizedKeyword.indexOf("-en-"))
            return url + locationSlugger + "/" + productSlugger
        } else {
            //caso general
            return url + "/" +  sanitizedKeyword + ".htm?fromSearch=1"
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

