export default class MyAds {
    constructor({idanuncio, titulo, precio, fecha, texto,fotos, fotos_thumb}) {
        this.idanuncio= idanuncio
        this.titulo= titulo
        this.precio= precio
        this.fecha= fecha
        this. texto= texto
        this.fotos= fotos
        this.fotos_thumb= fotos_thumb
        this.computed_props= {
            isRenewed: false
        }
    }
}

