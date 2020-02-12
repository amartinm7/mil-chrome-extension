async function doLoginService(doLogin, credentials) {
    console.log(">>>doLoginService")
    const response = await doLogin(credentials)
    console.log(JSON.stringify(response.data))
    return response
}

export default doLoginService