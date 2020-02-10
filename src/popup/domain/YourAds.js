function YourAd(jsonAd) {
    console.log("YourAd(jsonAd)...")
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

function YourAds (jsonAdList){
    console.log("YourAds(jsonAdList)...")
    if (Array.isArray(jsonAdList)){
        return jsonAdList.map(function (jsonAd) {
            return new YourAd(jsonAd);
        })
    }
    return []
}

export default YourAds
