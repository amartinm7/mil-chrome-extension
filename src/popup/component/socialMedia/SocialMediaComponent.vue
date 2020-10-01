<template>
    <div class="ma-scroll-spy-effect">
        <section class="uk-section uk-section-xsmall">
            <div class="uk-width-auto uk-text-center uk-padding-small">
                <div>Descarga Milanuncios en tu móvil</div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-around">
                <div class="uk-width-1-6">
                </div>
                <div class="">
                    <a href="https://go.onelink.me/app/1ee638ce" target="_blank" rel="noopener noreferrer">
                        <div class="social-media-google-store ma-spin-horizontally"/>
                    </a>
                </div>
                <div>
                    <a href="https://go.onelink.me/app/751615a1" target="_blank" rel="noopener noreferrer">
                        <div class="social-media-apple-store ma-spin-horizontally"/>
                    </a>
                </div>
                <div class="uk-width-1-6">
                </div>
            </div>
        </section>

        <section class="uk-section uk-section-xsmall">
            <div class="uk-width-auto uk-text-center uk-padding-small">
                <div>S&iacute;guenos</div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-around">
                <div class="uk-width-1-5">
                </div>
                <div class="uk-width-auto ">
                    <a href="https://www.facebook.com/Milanuncios/" target="_blank" rel="noopener noreferrer">
                        <div class="social-media-facebook ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://twitter.com/milanuncios" target="_blank" rel="noopener noreferrer">
                        <div class="social-media-twitter ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://www.instagram.com/milanuncios/" target="_blank" rel="noopener noreferrer">
                        <div class="social-media-instagram ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://www.youtube.com/channel/UCw6Jn6QF5L9NXYkr_XNFMCQ" target="_blank" rel="noopener noreferrer">
                        <div class="social-media-youtube ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-1-5">
                </div>
            </div>
            <div class="uk-width-auto uk-text-center uk-padding-small">
                <div></div>
            </div>
            <div class="uk-width-auto uk-text-center uk-padding-small">
                <div>Milanuncios es parte de Adevinta junto con:</div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-around">
                <div class="uk-width-1-6">
                </div>
                <div class="uk-width-auto">
                    <a href="https://www.habitaclia.com/" target="_blank" rel="noopener noreferrer">
                        <div class="social-media social-media-habitaclia ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://www.fotocasa.es" target="_blank" rel="noopener noreferrer">
                        <div class="social-media social-media-fotocasa ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://www.coches.net/" target="_blank" rel="noopener noreferrer">
                        <div class="social-media social-media-cochesnet ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://motos.coches.net/" target="_blank" rel="noopener noreferrer">
                        <div class="social-media social-media-motosnet ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-auto">
                    <a href="https://www.infojobs.net" target="_blank" rel="noopener noreferrer">
                        <div class="social-media social-media-infojobs ma-spin-icon"/>
                    </a>
                </div>
                <div class="uk-width-1-6">
                </div>

            </div>
            <div class="uk-width-auto uk-text-center uk-padding-small">
                <div>Copyright © 2020 - Adevinta Spain S.L.U.</div>
                <div>Todos los derechos reservados.</div>
            </div>
        </section>

        <section class="uk-section uk-section-xsmall">
            <div class="uk-position-relative uk-visible-toggle uk-light" >
                <a class="uk-button uk-button-default" href="#modal-center" uk-toggle>
                    <img src="https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/banners/carsCampaign/carsCampaignBannerMobile_bg.b97cbb6439.jpg">
                </a>
            </div>
            <div id="modal-center" class="uk-flex-top" uk-modal>
                <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                    <iframe src="https://www.youtube-nocookie.com/embed/KKrEUft8p4g?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                            width="1920" height="1080"
                            frameborder="0" uk-responsive
                            uk-video="automute: true"></iframe>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'mySocialMediaComponent',
    props: {
    },
    data: function () {
        return {
        }
    }
}
</script>
<style>

    .social-media-facebook {
        width: 40px;
        height: 40px;
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-facebook-footer.a86d3f466e.svg) no-repeat;
    }

    .social-media-facebook:hover {
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-facebook-footer-hover.40b5a2798a.svg) no-repeat;
    }

    .social-media-twitter {
        width: 40px;
        height: 40px;
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-twitter-footer.499be77ce3.svg) no-repeat;
    }

    .social-media-twitter:hover {
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-twitter-footer-hover.8aec2306f6.svg) no-repeat;
    }

    .social-media-instagram {
        width: 40px;
        height: 40px;
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-instagram-footer.d92316c95b.svg) no-repeat;
    }

    .social-media-instagram:hover {
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-instagram-footer-hover.0d3f51cbe9.svg) no-repeat;
    }

    .social-media-youtube {
        width: 40px;
        height: 40px;
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-youtube-footer.dbab7f6c02.svg) no-repeat;
    }

    .social-media-youtube:hover {
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-youtube-footer-hover.18e3d63e1c.svg) no-repeat;
    }

    .social-media {
        opacity: 1;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .social-media:hover {
        opacity: .5;
        transition: opacity .2s ease-out;
        -moz-transition: opacity .2s ease-out;
        -webkit-transition: opacity .2s ease-out;
        -o-transition: opacity .2s ease-out;
    }

    .social-media-google-store {
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/promo/logo-disponible-googlePlay.dda98bd191.png) no-repeat;
    }

    .social-media-apple-store {
        background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/promo/logo-disponible-appStore.c1747aba6d.png) no-repeat;
    }

    .social-media-habitaclia {
        background-image: url(https://pbs.twimg.com/profile_images/1191255789467570176/bRiejI5I_reasonably_small.jpg);
    }

    .social-media-fotocasa {
        background-image: url(https://pbs.twimg.com/profile_images/1191255789467570176/bRiejI5I_reasonably_small.jpg);
    }

    .social-media-cochesnet {
        background-image: url(https://pbs.twimg.com/profile_images/1021333453730664449/MLnUoeiJ_reasonably_small.jpg);
    }

    .social-media-motosnet {
        background-image: url("https://pbs.twimg.com/profile_images/1021334353178243074/j_iUQG4I_reasonably_small.jpg");
    }

    .social-media-infojobs {
        background-image: url("https://pbs.twimg.com/profile_images/1078929979814170624/rwC8Rsvq_reasonably_small.jpg");
    }



    /** for debug styling
      div {
        background-color: lightgrey;;
        border: 1px solid green;
        padding: 1px;
        margin: 1px;
      }
    **/
</style>