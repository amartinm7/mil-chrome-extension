import doLoginService from "../application/login/DoLoginService";

import doLogin from "./repository/DoLogin";

export default beanConfiguration = {
    doLoginService: doLoginService(doLogin, credentials)
}