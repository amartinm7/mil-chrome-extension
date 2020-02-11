function MyAd(jsonAd) {
    console.log("MyAd(jsonAd)...")
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

function MyAds (jsonAdList){
    console.log("MyAds(jsonAdList)...")
    if (Array.isArray(jsonAdList)){
        return jsonAdList.map(function (jsonAd) {
            return new MyAd(jsonAd);
        })
    }
    return []
}

export default MyAds
