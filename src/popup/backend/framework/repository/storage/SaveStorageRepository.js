
class SaveStorageRepository{
    constructor(storage) {
        if (this.$chromeExtensionRef === undefined || this.$chromeExtensionRef == null){
            this._storage = storage
        } else {
            this._storage = this.$chromeExtensionRef.storage
        }
    }

    async execute(saveStorageRepositoryRequest){
        // load the existing storage into memory
        console.log(`>>>SaveStorageRepository execute localstorage ${JSON.stringify(this._storage)})`
        )
        const obj = {'mil-date-time': new Date().toDateString()}
        this._storage.local.clear(function() {
            console.log(`local clear `);
        });
        this._storage.local.set(obj, function() {
            console.log(`Value is set to ${JSON.stringify(obj)}`)
        });

        await this._logStorage()

        this._storage.local.get('mil-date-time', function(result) {
            console.log(`Value currently is ${JSON.stringify(result)}`)
        });
        return new SaveStorageRepositoryResponse()
    }

    //As far as I am aware, chrome.storage is not represented in DevTools.
    _logStorage() {
        const vm = this
        if(vm._storage) {
            vm._storage.local.get(function(data){
                console.log(`chrome.storage.local: ${JSON.stringify(vm.$chromeExtensionRef)}`)
                if(vm.$chromeExtensionRef.runtime.lastError) {
                    console.error(vm.$chromeExtensionRef.runtime.lastError)
                } else {
                    console.log(data)
                }
                vm._storage.sync.get(function(data){
                    console.log("chrome.storage.sync:")
                    if(vm.$chromeExtensionRef.runtime.lastError) {
                        console.error(vm.$chromeExtensionRef.runtime.lastError)
                    } else {
                        console.log(data)
                    }
                })
            })
        } else {
            console.warn("chrome.storage is not accessible, check permissions")
        }
    }
}

class SaveStorageRepositoryRequest{
    constructor() {
    }
}

class SaveStorageRepositoryResponse{
    constructor() {
    }
}

export {SaveStorageRepository, SaveStorageRepositoryRequest, SaveStorageRepositoryResponse}
