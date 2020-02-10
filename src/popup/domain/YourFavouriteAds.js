function YourFavouriteAd(jsonAd) {
    console.log("YourFavouriteAd(jsonAd)...")
    const yourAd = {
        idanuncio: jsonAd.idanuncio,
        titulo: jsonAd.titulo,
        precio: jsonAd.precio,
        fecha: jsonAd.fecha,
        texto: jsonAd.texto,
        fotos: jsonAd.fotos,
        fotos_thumb: jsonAd.fotos_thumb,
        computed_props: {
            isRenewed: false
        }
    }
    return yourAd
}

function YourFavouriteAds (jsonAdList){
    console.log("YourFavouriteAds(jsonAdList)...")
    if (Array.isArray(jsonAdList)){
        return jsonAdList.map(function (jsonAd) {
            return new YourFavouriteAd(jsonAd);
        })
    }
    return []
}

export default YourFavouriteAds
