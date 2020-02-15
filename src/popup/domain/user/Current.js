export default class Current {
    constructor({email, createdAt, apiToken, sessionId}){
        this.logedUser = {
            email: (email) ? email : "",
            createdAt: (createdAt) ? createdAt : ""
        }
        this.session = {
            apiToken:  apiToken,
            id: sessionId
        }
    }
}