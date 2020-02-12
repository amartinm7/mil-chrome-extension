async function doLogoutService(doLogout) {
    console.log(">>>doLogoutService")
    const response = await doLogout()
    console.log(JSON.stringify(response))
    return response
}

export default doLogoutService