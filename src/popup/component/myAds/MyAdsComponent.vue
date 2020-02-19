<template>
    <div class="ma-scroll-spy-effect">
    <article class="uk-comment" v-for="(ad, index) in ads" v-bind:todo="ad" v-bind:key="ad.id">
        <div class="uk-card uk-card-default uk-card-body uk-padding-small">
            <div class="uk-flex">
                <div class="uk-width-1-4">
                    <span class="uk-label-danger">&nbsp;Ref {{ad.idanuncio}}&nbsp;</span>
                </div>
                <div class="uk-text-right uk-width-3-4">
                    <span class="uk-label" v-if="enableRenew == true"><a v-on:click.prevent.stop="onDoRenew(ad)" class="uk-link-reset">Renueva</a></span>
                    <span class="uk-label" v-if="enableBets == true"><a v-bind:href="getBetUrl(ad.idanuncio)" target="_blank" class="uk-link-reset">Subasta</a></span>
                    <span :uk-toggle="getUkToogleClassNameByIndex(index)" uk-icon="icon: thumbnails"></span>
                </div>
            </div>
            <div class="uk-width-auto">&nbsp;</div>
            <div :class="getToogleClassesNameByIndex(index)">
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
                            <div class="uk-width-1-2 uk-text-left">
                                <a class="uk-link-reset" v-bind:href="getAdUrlByProvincia(ad.categoria,ad.provincia)" target="_blank">
                                    <div class="uk-icon" uk-icon="icon: location"></div>{{sanitizeTitle(ad.localidad)}}
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
            <div :class="getToogleClassNameByIndex(index)" hidden>
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
    </article>
    </div>
</template>
<script>

    import {DoRenewAdController, DoRenewAdControllerRequest} from "../../framework/controller/DoRenewAdController";

    export default {
    name: 'myAdsComponent',
    props: {
        ads: {
            type: Array
        },
        enableRenew: Boolean,
        enableBets: Boolean
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
        getAdUrlByProvincia: function (slugger, provincia) {
            return `http://www.milanuncios.com/${slugger}-en-${provincia}/`
        },
        getBetUrl: function (idanuncio){
            return `https://www.milanuncios.com/mis-anuncios/subastas/${idanuncio}`
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
            try {
                const doRenewAdControllerResponse = await new DoRenewAdController().execute(
                    new DoRenewAdControllerRequest({
                        email: "",
                        password: "",
                        adId: ad.idanuncio
                    })
                )
                console.log(`>>>${JSON.stringify(doRenewAdControllerResponse)}`)
                ad.computed_props.isRenewed = true
                console.log(`>>>renewed ad ${ad.idanuncio}`)
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

    .uk-icon:hover, .uk-label:hover, .uk-label-success:hover, .uk-label-warning:hover, .uk-label-danger:hover {
        opacity: .5;
        transition: opacity .2s ease-out;
        -moz-transition: opacity .2s ease-out;
        -webkit-transition: opacity .2s ease-out;
        -o-transition: opacity .2s ease-out;
    }

    .uk-icon:active, .uk-label:active, .uk-label-success:active, .uk-label-warning:active, .uk-label-danger:active {
        opacity: .1;
        transition: opacity .2s ease-out;
        -moz-transition: opacity .2s ease-out;
        -webkit-transition: opacity .2s ease-out;
        -o-transition: opacity .2s ease-out;
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