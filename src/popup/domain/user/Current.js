export default class Current {
    constructor({email, createdAt, apiToken}){
        this.logedUser = {
            email: (email) ? email : "",
            createdAt: (createdAt) ? createdAt : ""
        }
        this.session = {
            apiToken:  apiToken
        }
    }
}