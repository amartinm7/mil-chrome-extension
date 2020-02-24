import {SaveStorageService, SaveStorageServiceRequest} from "../../../application/storage/SaveStorageService";

class SaveStorageController{
    constructor(saveStorageService){
        this._saveStorageService = saveStorageService
    }

    async execute (saveStorageControllerRequest){
        await this._saveStorageService.execute(
            new SaveStorageServiceRequest()
        )
    }
}

class SaveStorageControllerRequest{
    constructor() {
    }
}

class SaveStorageControllerResponse{
    constructor() {
    }
}

export {SaveStorageController, SaveStorageControllerRequest, SaveStorageControllerResponse}