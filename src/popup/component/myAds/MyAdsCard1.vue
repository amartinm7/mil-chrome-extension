<template>
    <div class="ma-scroll-spy-effect">
        sdfsdfdsfdsf
        <article class="uk-comment" v-for="(ad, index) in ads" v-bind:todo="ad" v-bind:key="ad.id">
            <div class="scene">
                <div class="card">
                    <div class="card__face card__face--front">
                        <div class="uk-width-1-4 uk-height-max-small">
                            <a class="uk-link-reset" v-bind:href="getAdUrl(ad.idanuncio)" target="_blank">
                                <img v-bind:src="getFotoFromAd(ad)" class="uk-margin-auto">
                            </a>
                        </div>
                        <div class="uk-width-3-4 uk-padding-small">
                            <div>
                                <a class="uk-link-reset" v-bind:href="getAdUrl(ad.idanuncio)" target="_blank">{{sanitizeTitle(ad.titulo)}}</a>
                            </div>
                            <div>{{sanitizeText(ad.texto)}}</div>
                            <div>&nbsp;</div>
                            <div class="uk-flex uk-flex-column uk-text-right uk-width-auto">
                                <div>
                          <span class="uk-label-success">
                            <a v-bind:href="getAdUrl(ad.idanuncio)" target="_blank" class="uk-link-reset" style="text-transform: lowercase;">&nbsp;Hace {{ad.fecha}}&nbsp;</a>
                          </span>
                                </div>
                                <div class="uk-flex">
                                    <div class="uk-width-1-2 uk-text-left" :uk-tooltip="getAdTitleByLocation(ad.categoria,ad.provincia)">
                                        <a class="uk-link-reset" v-bind:href="getAdUrlByProvincia(ad.categoria,ad.provincia)" target="_blank">
                                            <div class="uk-icon ma-spin-horizontally" uk-icon="icon: location">
                                            </div>{{sanitizeMunicipality(ad)}}
                                        </a>
                                    </div>
                                    <div class="uk-width-1-2">
                              <span class="uk-label-warning">
                                <a v-bind:href="getAdUrl(ad.idanuncio)" target="_blank" class="uk-link-reset" style="text-transform: lowercase;">&nbsp;{{ad.precio}}&nbsp;</a>
                              </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card__face card__face--back">
                        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
                            <ul class="uk-slideshow-items" >
                                <li v-for="(foto, index) in ad.fotos" v-bind:todo="foto" v-bind:key="index">
                                    <img v-bind:src="foto" alt="" uk-cover>
                                </li>
                            </ul>
                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
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