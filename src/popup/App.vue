<template>
  <div uk-scrollspy="cls: uk-animation-fade; target: .ma-scroll-spy-effect; delay: 200; repeat: true">
    <section class="uk-section uk-section-xsmall uk-padding-remove-bottom">
      <div class="uk-grid-small uk-flex-middle uk-flex-around" uk-grid>
        <div class="uk-width-auto" >
          <div class="uk-width-auto" v-show="isLogged == true">
            <a href="#offcanvas-usage" uk-toggle uk-icon="icon: menu"></a>
            <div id="offcanvas-usage" uk-offcanvas="overlay: true">
              <div class="uk-offcanvas-bar">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <div>
                  <img class="uk-border-circle" width="40" height="40" src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png">
                </div>
                <div class="uk-width-expand">
                  <h6 class="uk-card-subtitle uk-margin-remove-bottom">{{current.logedUser.email}}</h6>
                  <p class="uk-text-meta uk-margin-remove-top">{{ getUserDateMsg() }}</p>
                </div>
                <ul class="uk-nav uk-nav-default" uk-accordion="collapsible: false">
                  <li class="uk-nav-divider"></li>
                  <li class="uk-parent uk-open">
                    <a href="#" class="uk-accordion-title"><span class="uk-margin-small-right" uk-icon="icon: table"></span>Tús anuncios</a>
                    <ul class="uk-nav-sub uk-accordion-content">
                      <li><a href="https://www.milanuncios.com/publicar-anuncios-gratis/" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: pencil"/>Publicar anuncios</a></li>
                      <li><a href="https://www.milanuncios.com/creditos/destaca-tu-anuncio" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: star"/>Destacar anuncios</a></li>
                      <li><a href="https://www.milanuncios.com/seleccion/" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: heart"/>Mis favoritos</a></li>
                      <li><a href="https://www.milanuncios.com/mis-busquedas/" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: search"/>Mis busquedas</a></li>
                      <li><a href="https://www.milanuncios.com/mis-mensajes/" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: comments"/>Mis mensajes</a></li>
                      <li><a href="https://www.milanuncios.com/mi-tienda/" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: home"/>Mi tienda</a></li>
                    </ul>
                  </li>
                  <li class="uk-parent uk-open">
                    <a href="#" class="uk-accordion-title"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span>Mi Perfil</a>
                    <ul class="uk-nav-sub uk-accordion-content">
                      <li><a href="https://www.milanuncios.com/mis-anuncios/" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: user"/>Cuenta y privacidad</a></li>
                      <li><a href="https://ayuda.milanuncios.com/hc/es" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: question"/>Ayuda</a></li>
                    </ul>
                  </li>
                  <li class="uk-nav-divider"></li>
                  <li><a v-on:click="onLogout"><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span>Salir</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-auto uk-padding-remove">
          <a href="http://milanuncios.com" target="_blank" style="text-decoration:none;" class="ma-NavigationHeader-logoLink">
            <img src="https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/logo.2676833a05.svg">
          </a>
        </div>
        <div class="uk-width-auto">
        </div>
      </div>
      <div class="uk-container uk-padding-small">
        <form class="uk-form-stacked" v-on:submit.prevent="onAdSearch">
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: search"></span>
            <input type="text" class="uk-input uk-form-width-large"
                   placeholder="¿que buscas?"
                   v-on:keyup.enter="onAdSearch"
                   v-model="searchFormData.keywords">
          </div>
        </form>
      </div>
    </section>
    <!-- user -->
    <section class="uk-section uk-section-xsmall" v-if="isLogged == false">
      <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <div class="uk-container">
          <form class="uk-form-stacked">
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input type="email" v-bind:class='{"uk-input":true, "uk-form-width-large":true, "uk-form-danger":(formData.errors.invalidEmail == true)}' placeholder="User" v-model="formData.email">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input type="password" v-bind:class='{"uk-input":true, "uk-form-width-large":true, "uk-form-danger":(formData.errors.invalidPassword == true)}' placeholder="Password" v-model="formData.password">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline">
                <button type="button" v-on:click="onDoLogin" class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- end user -->
    <!-- items -->
    <section class="uk-section uk-section-xsmall" v-if="isLogged == true">
      <ul uk-tab class="uk-flex-around">
        <li class="uk-active"><a href="#" uk-icon="icon: copy"></a>Mis Anuncios</li>
        <li><a href="#" uk-icon="icon: heart"></a>Mis Favoritos</li>
        <li><a href="#" uk-icon="icon: search"></a>Utl. Búsquedas</li>
      </ul>
      <div class="uk-switcher">
        <div class="uk-active">
          <my-ads-component v-bind:ads="ads"
                            v-bind:enable-renew="myAdsComponent.enableRenew"
                            v-bind:enable-bets="myAdsComponent.enableBets"
                            class="ma-scroll-spy-effect">
          </my-ads-component>
        </div>
        <div>
          <my-ads-component v-bind:ads="favoriteAds"
                            v-bind:enable-renew="favouriteAdsComponent.enableRenew"
                            v-bind:enable-bets="favouriteAdsComponent.enableBets"
                            class="ma-scroll-spy-effect">
          </my-ads-component>
        </div>
        <div>
          <my-ads-component v-bind:ads="favoriteAds"
                            v-bind:enable-renew="favouriteAdsComponent.enableRenew"
                            v-bind:enable-bets="favouriteAdsComponent.enableBets"
                            class="ma-scroll-spy-effect">
          </my-ads-component>
        </div>
      </div>
    </section>

    <!-- social media first iteration-->
    <my-social-media-component></my-social-media-component>
  </div>
</template>

<script>
  import MyAdsComponent from "./component/myAds/MyAdsComponent";
  import MySocialMediaComponent from "./component/socialMedia/SocialMediaComponent";
  import {LoadPageController, LoadPageControllerRequest} from "./framework/controller/LoadPageController";
  import {DoLogoutController, DoLogoutControllerRequest} from "./framework/controller/DoLogoutController";
  import {DoLoginController, DoLoginControllerRequest} from "./framework/controller/DoLoginController";

  export default {
    name: "app",
    components: {MyAdsComponent, MySocialMediaComponent},
    data: function () {
      return {
        myAdsComponent:{ enableRenew: true, enableBets: true},
        favouriteAdsComponent:{ enableRenew: false, enableBets: false},
        isLogged: false,
        isLoading: false,
        isDisabled: false,
        searchFormData: {
          keywords: ""
        },
        formData: {
          email: "antonio.martin@schibsted.com",
          password: "Schibsted18",
          errors: {
            invalidEmail: false,
            invalidPassword: false
          },
        },
        current: {
          logedUser: {
            email: "",
            createdAt: ""
          },
          session: {
            apiToken: ""
          }
        },
        ads:[
        ],
        favoriteAds:[
        ],
        savedSearchs: null
      };
    },
    methods: {
      getUserDateMsg: function (){
        try{
          const strDate =  new Date(this.current.logedUser.createdAt).toLocaleDateString()
          return (strDate.startsWith("Invalid")) ? "" : `Usuario desde el ${strDate}`
        } catch (e) {
          return ""
        }
      },
      hasErrorsInLoginForm(){
        this.formData.errors.invalidEmail = !this.formData.email || 0 === this.formData.email.length
        this.formData.errors.invalidPassword = !this.formData.password || 0 === this.formData.email.password
        return this.formData.errors.invalidEmail || this.formData.errors.invalidPassword
      },
      onAdSearch: function () {
        const url = `https://www.milanuncios.com/anuncios/${this.searchFormData.keywords}.htm?fromSearch=1`
        window.open(url, '_blank')
      },
      onDoLogin: async function () {
        console.log(">>>onDoLogin")
        if ( this.hasErrorsInLoginForm() ){
          console.log(">>>invalid credentials")
          return
        }
        try {
          await this.login(this.formData)
        } catch (err) {
          console.log(">>>login errors")
          this.formData.errors.invalidEmail = true
          this.formData.errors.invalidPassword = true
          console.log(JSON.stringify(err));
          console.log("ERROR: ====", err);
        }
      },
      onLoadPage: function(){
        console.log(">>>onLoadPage")
        try {
          this.loadPage(this.formData)
        } catch (err) {
          console.log(JSON.stringify(err));
          console.log("ERROR: ====", err);
        }
      },
      login: async function (formData) {
        console.log(">>>loadPage")
        const doLoginControllerResponse = await new DoLoginController().execute(
                new DoLoginControllerRequest({...formData})
        )
        this.current = doLoginControllerResponse.current
        this.isLogged = true
        this.ads = doLoginControllerResponse.ads
        this.favoriteAds = doLoginControllerResponse.favouriteAds
      },
      loadPage: async function (formData) {
        console.log(">>>loadPage")
        const loadPageControllerResponse = await new LoadPageController().execute(
                new LoadPageControllerRequest({...formData})
        )
        this.logedUser = loadPageControllerResponse.current.logedUser
        this.current = loadPageControllerResponse.current
        this.isLogged = true
        this.ads = loadPageControllerResponse.ads
        this.favoriteAds = loadPageControllerResponse.favouriteAds
      },
      onLogout: async function(){
        const vm = this
        const doLogoutControllerResponse = await new DoLogoutController().execute(new DoLogoutControllerRequest() )
        vm.isLogged = false
      },
      // getSavedSearchs: async function (header, params) {
      //   const url = `https://ms-ma--user-profiles.spain.schibsted.io/users/183565764/savedsearches/?${qs.stringify(params)}`
      //   return axios({
      //     method: 'get',
      //     url: url,
      //     data: params,
      //     headers: header,
      //     config: { withCredentials: true }
      //     //[{"id":"e03f3ab9-7edb-4019-8b35-7c4e1e187446","userId":"183565764","title":"seat leon en Madrid","status":"ACTIVE","targeting":{"type":"coches","location":{"province":{"id":28}},"category":{"id":100664},"brand":"seat","domain":"leon","price":{"from":6000.0,"to":42000.0},"year":{"from":2019.0,"to":2020.0}},"creationDate":"2020-01-28T08:27:32.374","updateDate":"2020-01-28T08:27:32.374"}]
      //   })
      //},
    },
    created() {
    },
    mounted: async function () {
      await this.onLoadPage()
    }
  };
</script>

<style>
  .main {
    width: 550px;
  }
  .loading-icon {
    position: absolute !important;
    top: 30px !important;
    right: 50px !important;
    font-size: 8px;
  }

  .ma-scroll-spy-effect{
  }

  .ma-NavigationHeader-logoLink {
    display: block;
    height: 47px;
    margin: auto;
    width: 234px;
  }

  .social-media-google-store {
    opacity: 1;
    width: 120px;
    height: 40px;
    background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/promo/logo-disponible-googlePlay.dda98bd191.png) no-repeat;
  }

  .social-media-google-store:hover {
    opacity: .5;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
  }

  .social-media-apple-store {
    opacity: 1;
    width: 120px;
    height: 40px;
    background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/promo/logo-disponible-appStore.c1747aba6d.png) no-repeat;
  }

  .social-media-apple-store:hover {
    opacity: .5;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
  }

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

  .social-media-habitaclia {
    background-image: url(https://pbs.twimg.com/profile_images/1191255789467570176/bRiejI5I_reasonably_small.jpg);
  }

  .social-media-fotocasa {
    background-image: url(https://pbs.twimg.com/profile_images/1038004057510760448/FWelhF5o_reasonably_small.jpg);
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
