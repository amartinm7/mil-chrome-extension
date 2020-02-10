function Ad(jsonAd) {
    console.log("jsonAdtoAd...")
    const ad = {
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
    return ad
}

function AdJsonToAdTransformer (jsonAdList){
    console.log("AdJsonToAdTransformer...")
    if (Array.isArray(jsonAdList)){
        return jsonAdList.map(function (jsonAd) {
            return new Ad(jsonAd);
        })
    }
    return []
}

export default AdJsonToAdTransformer
