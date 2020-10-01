<template>
    <div class="ma-scroll-spy-effect">
    </div>
</template>
<script>
import ControllerFacadeFactoryBean from "../../backend/framework/ControllerFacadeFactoryBean";
import {DoRenewAdControllerRequest} from "../../backend/framework/controller/ad/renew/DoRenewAdController";

export default {
    name: 'myAdsCards',
    props: {
        ads: {
            type: Array
        }
    },
    data: function () {
        return {
        }
    },
    methods: {
        getUkToogleClassNameByIndex: function (index) {
            return `target: .my-toggle-${index}`
        },
        getToogleClassNameByIndex: function (index) {
            return `my-toggle-${index}`
        },
        getToogleClassesNameByIndex: function (index) {
            return `my-toggle-${index} uk-width-auto uk-flex uk-flex-top uk-flex-between`
        },
        getFotoFromAd: function (ad){
            return ( ad.fotos_thumb != undefined && ad.fotos_thumb[0] != undefined ) ?  ad.fotos_thumb[0] : ""
        },
        getAdUrl: function (idanuncio) {
            return `http://www.milanuncios.com/anuncios/r${idanuncio}.htm`
        },
        getAdTitleByLocation: function (slugger, provincia) {
            return `${slugger.replace(/-/g, " ")} en ${provincia}`
        },
        getAdUrlByProvincia: function (slugger, provincia) {
            return `http://www.milanuncios.com/${slugger}-en-${provincia}/`
        },
        getBetUrl: function (idanuncio){
            return `https://www.milanuncios.com/mis-anuncios/subastas/${idanuncio}`
        },
        sanitizeMunicipality: function (ad){
            return (ad.localidad === undefined || ad.localidad === '') ? ad.provincia : ad.localidad
        },
        sanitizeTitle: function (text){
            if (!!text == false){
                return
            }
            if (text.trim().length > 36 ) {
                return (`${text.trim().substring(0,33)}...`)
            }
            return text.trim()
        },
        sanitizeText: function (text){
            if (text.trim().length > 88 ) {
                return (`${text.trim().substring(0,85)}...`)
            }
            return text.trim()
        },
        onDoRenew: async function(ad){
            console.log(">>>onDoRenew")
            const vm = this
            try {
                const doRenewAdControllerResponse = await ControllerFacadeFactoryBean.doRenewAdController().execute(
                    new DoRenewAdControllerRequest({
                        email: "",
                        password: "",
                        adId: ad.idanuncio
                    })
                )
                console.log(`>>>${JSON.stringify(doRenewAdControllerResponse)}`)
                ad.computed_props.isRenewed = true
                console.log(`>>>renewed ad ${ad.idanuncio}`)
                vm.$eventBus.$emit("reloadPage", ad.idanuncio)
            } catch (err) {
                this.isRenewed = false
                console.log(JSON.stringify(err));
                console.log("ERROR: ====", err);
            }
        },
    },
    created() {
    },
    mounted: async function () {
        console.log(">>>myAdsComponent loading your ads")
    }
}
</script>
<style>

    .scene {
        width: 540px;
        height: 350px;
        padding: 10px;
        perspective: 550px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        position: relative;
    }

    .card:hover {
        transform: rotateY(180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .card__face--front {
    }

    .card__face--back {
        transform: rotateY(180deg);
    }


    /** for debug styling
      div {
        background-color: lightgrey;;
        border: 1px solid green;
        padding: 1px;
        margin: 1px;
      }
      for debug styling **/
</style>