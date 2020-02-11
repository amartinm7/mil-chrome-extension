function MyFavouriteAd(jsonAd) {
    console.log("MyFavouriteAd(jsonAd)...")
    const myAd = {
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
    return myAd
}

function MyFavouriteAds (jsonAdList){
    console.log("MyFavouriteAds(jsonAdList)...")
    if (Array.isArray(jsonAdList)){
        return jsonAdList.map(function (jsonAd) {
            return new MyFavouriteAd(jsonAd);
        })
    }
    return []
}

export default MyFavouriteAds
