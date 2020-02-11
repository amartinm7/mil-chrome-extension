import MyFavouriteAds from "../domain/MyFavouriteAds";

async function getMyFavouriteAdsService(findAllMyFavouritesAds, apiToken) {
    console.log(">>>getMyFavouriteAdsService")
    if (apiToken === undefined || apiToken === ""){ return }
    const adsResponse = await findAllMyFavouritesAds(apiToken)
    const ads = MyFavouriteAds(adsResponse.data.data.anuncios)
    console.log(JSON.stringify(ads))
    return ads
}

export default getMyFavouriteAdsService