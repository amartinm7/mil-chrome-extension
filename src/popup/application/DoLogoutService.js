
async function doLogoutService(logout) {
    console.log(">>>doLogoutService")
    const response = await logout()
    console.log(JSON.stringify(response))
    return response
}

export default doLogoutService