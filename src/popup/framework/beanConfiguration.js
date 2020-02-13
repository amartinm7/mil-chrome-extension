import doLoginService from "../application/user/DoLoginService";

import doLoginRepository from "./repository/user/DoLoginRepository";

export default beanConfiguration = {
    doLoginService: doLoginService(doLoginRepository, credentials)
}