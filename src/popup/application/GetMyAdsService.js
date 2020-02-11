import MyAds from "../domain/MyAds";

async function getMyAdsService (findAll, apiToken) {
    console.log(">>>getMyAdsService")
    if (apiToken === undefined || apiToken === ""){ return }
    const adsResponse = await findAll(apiToken)
    const ads = MyAds(adsResponse.data.data.anuncios)
    console.log(JSON.stringify(ads))
    return ads
}

export default getMyAdsService