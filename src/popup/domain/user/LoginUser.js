export default class LoginUser {
    constructor({email, createdAt, apiToken}){
        this.logedUser = {
            email: email,
            createdAt: createdAt
        }
        this.session = {
            apiToken:  apiToken
        }
    }
}