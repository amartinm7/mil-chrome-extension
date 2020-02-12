async function doRenewAdService (doLogin, doLoginWithCurrentCookies, doRenewAd, credentials, ad){
    console.log(">>>onDoRenew")
    try {
        const loginWithCookieResponse = await doLoginWithCurrentCookies()
        const apiToken = loginWithCookieResponse.data.apiToken
        try {
            await doRenewAd(apiToken, ad.idanuncio)
            console.log(`>>>renewed ad ${ad.idanuncio}`)
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    } catch (err) {
        const loginResponse = await doLogin(credentials)
        console.log(JSON.stringify(loginResponse.data))
        const apiToken = loginResponse.data.session.apiToken
        try {
            await doRenewAd(apiToken, ad.idanuncio)
            console.log(`>>>renewed ad ${ad.idanuncio}`)
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    }
}

export default doRenewAdService