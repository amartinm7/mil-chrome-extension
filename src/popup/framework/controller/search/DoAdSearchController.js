class DoAdSearchController {
    constructor() {
    }

    async execute(doAdSearchControllerRequest){
        const url = `https://www.milanuncios.com/anuncios/${this.searchFormData.keywords}.htm?fromSearch=1`
        return new DoAdSearchControllerResponse({url})
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