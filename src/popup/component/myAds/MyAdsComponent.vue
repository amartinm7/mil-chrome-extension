<template>
    <div>
    <article class="uk-comment" v-for="(ad, index) in ads" v-bind:todo="ad" v-bind:key="ad.id">
        <div class="uk-card uk-card-default uk-card-body uk-padding-small">
            <div class="uk-text-right">
                <span class="uk-label" v-if="enableRenew == true"><a v-on:click.prevent.stop="onDoRenew(ad)" class="uk-link-reset">Renueva</a></span>
                <span class="uk-label" v-if="enableBets == true"><a v-bind:href="getBetUrl(ad.idanuncio)" target="_blank" class="uk-link-reset">Subasta</a></span>
            </div>
            <div class="uk-width-auto uk-flex uk-flex-top uk-flex-between">
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
                        <a v-bind:href="getAdUrl(ad.idanuncio)" target="_blank" class="uk-link-reset" style="text-transform: lowercase;">Hace {{ad.fecha}}</a>
                      </span>
                        </div>
                        <div>
                      <span class="uk-label-warning">
                        <a v-bind:href="getAdUrl(ad.idanuncio)" target="_blank" class="uk-link-reset" style="text-transform: lowercase;">Precio {{ad.precio}}</a>
                      </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    </div>
</template>
<script>

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
        getFotoFromAd: function (ad){
            return ( ad.fotos_thumb != undefined && ad.fotos_thumb[0] != undefined ) ?  ad.fotos_thumb[0] : ""
        },
        getAdUrl: function (idanuncio) {
            return `http://www.milanuncios.com/anuncios/r${idanuncio}.htm`
        },
        getBetUrl: function (idanuncio){
            return `https://www.milanuncios.com/mis-anuncios/subastas/${idanuncio}`
        },
        sanitizeTitle: function (text){
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
        onDoRenew: function (ad) {
            console.log("onDoRenew")
        }
    },
    created() {
    },
    mounted: async function () {
        console.log(">>>myAdsComponent loading your ads")
    }
}
</script>
<style>

</style>