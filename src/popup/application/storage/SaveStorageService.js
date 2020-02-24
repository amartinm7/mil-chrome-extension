import {SaveStorageRepositoryRequest} from "../../framework/repository/storage/SaveStorageRepository";

class SaveStorageService{
    constructor(saveStorageRepository) {
        this._saveStorageRepository = saveStorageRepository
    }

    async execute (saveStorageServiceRequest) {
        console.log(">>>saveStorageService")

        const saveStorageRepositoryResponse = await this._saveStorageRepository.execute(
            new SaveStorageRepositoryRequest()
        )

        console.log(`>>>saveStorageService ${JSON.stringify(saveStorageRepositoryResponse)}`)
        const saveStorageServiceResponse = new SaveStorageServiceResponse(saveStorageRepositoryResponse)
        console.log(JSON.stringify(saveStorageServiceResponse))
        return saveStorageServiceResponse
    }
}

class SaveStorageServiceRequest{
    constructor() {
    }
}

class SaveStorageServiceResponse{
    constructor(saveStorageRepositoryResponse) {
    }
}

export {SaveStorageService, SaveStorageServiceRequest, SaveStorageServiceResponse}