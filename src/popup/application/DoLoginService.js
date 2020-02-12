async function doLoginService(login, credentials) {
    console.log(">>>doLoginService")
    const response = await login(credentials)
    console.log(JSON.stringify(response.data))
    return response
}

export default doLoginService