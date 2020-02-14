import {Credentials} from "../../domain/user/Credentials";

export default class TransformToCredentialsService {
    constructor(){
    }

    toCredentials({email, password}) {
        return new Credentials(email, password)
    }
}