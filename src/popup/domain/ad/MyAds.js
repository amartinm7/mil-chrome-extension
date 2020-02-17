export default class MyAds {
    constructor({idanuncio, titulo, precio, fecha, texto,fotos, fotos_thumb, localidad, provincia, categoria}) {
        this.idanuncio= idanuncio
        this.titulo= titulo
        this.precio= precio
        this.fecha= fecha
        this. texto= texto
        this.fotos= fotos
        this.fotos_thumb= fotos_thumb
        this.localidad = localidad,
        this.provincia = provincia,
        this.categoria = categoria,
        this.computed_props= {
            isRenewed: false
        }
    }
}

