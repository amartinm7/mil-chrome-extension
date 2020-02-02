<template>
  <div>
    <section class="uk-section uk-section-xsmall">
        <div class="uk-card uk-card-hover uk-card-default uk-width-1-1@s">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <a href="#offcanvas-usage" uk-toggle>
                  <img class="uk-border-circle" width="40" height="40" src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png">
                </a>
                <div id="offcanvas-usage" uk-offcanvas="overlay: true">
                  <div class="uk-offcanvas-bar">
                    <button class="uk-offcanvas-close" type="button" uk-close></button>
                    <div>
                      <img class="uk-border-circle" width="40" height="40" src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png">
                    </div>
                    <div class="uk-width-expand">
                        <h6 class="uk-card-subtitle uk-margin-remove-bottom">{{logedUser.email}}</h6>
                        <p class="uk-text-meta uk-margin-remove-top">Usuario desde el {{ getDate() }}</p>
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
                          <li><a href="#" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: user"/>Cuenta y privacidad</a></li>
                          <li><a href="https://ayuda.milanuncios.com/hc/es" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: question"/>Ayuda</a></li>
                        </ul>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li><a v-on:click="onLogout"><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span>Salir</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="uk-width-expand">
                <a href="http://milanuncios.com" target="_blank" style="text-decoration:none;" class="ma-NavigationHeader-logoLink">
                  <img src="https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/logo.2676833a05.svg">
                </a>
              </div>
              <div class="uk-width-auto">
                <a v-on:click="onLogout" uk-icon="icon: sign-out"></a>
              </div>
            </div>
            <div>&nbsp;</div>
            <div class="uk-container">
              <form class="uk-form-stacked" v-on:submit.prevent="onSearch">
                <div class="uk-margin">
                  <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: search"></span>
                    <input type="text" class="uk-input uk-form-width-large"
                           placeholder="¿que buscas?"
                           v-on:keyup.enter="onSearch"
                           v-model="searchFormData.keywords">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
    <!-- login -->
    <section class="uk-section uk-section-xsmall" v-if="isLogged == false">
      <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <div class="uk-container">
          <form class="uk-form-stacked">
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input type="email" class="uk-input uk-form-width-large" placeholder="User" v-model="formData.email">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input type="password" class="uk-input uk-form-width-large" placeholder="Password" v-model="formData.password">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline">
                <button type="button" v-on:click="onSubmit" class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- end login -->
    <!-- nav bar -->
<!--    <section class="uk-section uk-section-xsmall" v-if="isLogged == true">
      <div class="uk-card uk-card-hover uk-card-default uk-width-1-1@s">
        <div class="uk-card-header">
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <a href="#offcanvas-usage" uk-toggle>
                <img class="uk-border-circle" width="40" height="40" src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png">
              </a>
              <div id="offcanvas-usage" uk-offcanvas="overlay: true">
                <div class="uk-offcanvas-bar">
                  <button class="uk-offcanvas-close" type="button" uk-close></button>
                  <div>
                    <img class="uk-border-circle" width="40" height="40" src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png">
                  </div>
                  <div class="uk-width-expand">
                    <h6 class="uk-card-subtitle uk-margin-remove-bottom">{{logedUser.email}}</h6>
                    <p class="uk-text-meta uk-margin-remove-top">Usuario desde el {{ getDate() }}</p>
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
                        <li><a href="#" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: user"/>Cuenta y privacidad</a></li>
                        <li><a href="https://ayuda.milanuncios.com/hc/es" target="_blank"><span class="uk-margin-small-right uk-icon" uk-icon="icon: question"/>Ayuda</a></li>
                      </ul>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li><a v-on:click="onLogout"><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span>Salir</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="uk-width-expand">
              <h6 class="uk-card-subtitle uk-margin-remove-bottom">{{logedUser.email}}</h6>
              <p class="uk-text-meta uk-margin-remove-top">Usuario desde el {{ getDate() }}</p>
            </div>
            <div class="uk-width-auto">
              <a v-on:click="onLogout" uk-icon="icon: sign-out"></a>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- end nav bar -->
    <!-- items -->
    <section class="uk-section uk-section-xsmall" v-if="isLogged == true">
      <ul uk-tab>
        <li class="uk-active"><a href="#">
          Tus Anuncios
        </a></li>
        <li><a href="#">
          Tus favoritos
        </a></li>
      </ul>
      <ul class="uk-switcher uk-margin-small-left">
        <li class="uk-active">
          <article class="uk-comment" v-for="(ad, index) in ads" v-bind:todo="ad" v-bind:key="ad.id">
            <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <a v-bind:href="getAdUrl(ad)" target="_blank" style="text-decoration:none;">
                  <img class="uk-comment-avatar" v-bind:src="getFotoFromAd(ad)" width="80" height="80" alt="">
                </a>
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" v-bind:href="getAdUrl(ad)" target="_blank">{{ad.titulo }}</a></h4>
                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a v-bind:href="getAdUrl(ad)" target="_blank" class="uk-link-reset">Hace {{ad.fecha}}</a></li>
                  <li><a v-bind:href="getAdUrl(ad)" target="_blank" class="uk-link-reset">Precio {{ad.precio}}</a></li>
                </ul>
              </div>
            </header>
          </article>
        </li>
        <li>
          <article class="uk-comment" v-for="(ad, index) in ads" v-bind:todo="ad" v-bind:key="ad.id">
            <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <a v-bind:href="getAdUrl(ad)" target="_blank" style="text-decoration:none;">
                  <img class="uk-comment-avatar" v-bind:src="getFotoFromAd(ad)" width="80" height="80" alt="">
                </a>
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" v-bind:href="getAdUrl(ad)" target="_blank">{{ad.titulo }}</a></h4>
                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a v-bind:href="getAdUrl(ad)" target="_blank" class="uk-link-reset">{{ad.fecha}}</a></li>
                  <li><a v-bind:href="getAdUrl(ad)" target="_blank" class="uk-link-reset">{{ad.precio}}</a></li>
                </ul>
              </div>
            </header>
            <div class="uk-comment-body">
              <p>{{ad.texto}}</p>
            </div>
          </article>
        </li>
      </ul>
    </section>

    <section class="uk-section uk-section-xsmall">
      <div class="uk-flex uk-flex-center" style="width: 100%">
        <a href="https://go.onelink.me/app/1ee638ce" target="_blank" rel="noopener noreferrer">
          <div class="social-media-google-store uk-margin-left"/>
        </a>
        <a href="https://go.onelink.me/app/751615a1" target="_blank" rel="noopener noreferrer">
          <div class="social-media-apple-store uk-margin-left" />
        </a>
      </div>
    </section>

    <section class="uk-section uk-section-xsmall">
      <div class="uk-flex uk-flex-center">
        <a href="https://www.facebook.com/Milanuncios/" target="_blank" rel="noopener noreferrer">
          <div class="social-media-facebook uk-margin-left"/>
        </a>
        <a href="https://twitter.com/milanuncios" target="_blank" rel="noopener noreferrer">
          <div class="social-media-twitter uk-margin-left"/>
        </a>
        <a href="https://www.instagram.com/milanuncios/" target="_blank" rel="noopener noreferrer">
          <div class="social-media-instagram uk-margin-left"/>
        </a>
        <a href="https://www.youtube.com/channel/UCw6Jn6QF5L9NXYkr_XNFMCQ" target="_blank" rel="noopener noreferrer">
          <div class="social-media-youtube uk-margin-left"/>
        </a>
      </div>
    </section>
    <section>
      <a class="uk-button uk-button-default" href="#modal-center" uk-toggle>Open</a>
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
    <section class="uk-section uk-section-xsmall">
      <div class="uk-cover-container" @mouseover="videoMute = false" @mouseleave="videoMute = true">
        <iframe src="https://www.youtube-nocookie.com/embed/KKrEUft8p4g?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                width="1920" height="1080"
                frameborder="0" uk-responsive
                uk-video="automute: true"></iframe>
      </div>
    </section>
    <!-- end items -->
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'querystring'
  //import login from './components/Login'

  export default {
    data() {
      return {
        isLogged: false,
        isLoading: false,
        isDisabled: false,
        searchFormData: {
          keywords: ""
        },
        formData: {
          email: "antonio.martin@schibsted.com",
          password: "Schibsted18"
        },
        formError: {
          email: "",
          password: ""
        },
        logedUser: {
          email: "",
          createdAt: ""
        },
        ads:[
          {
            titulo: "",
            precio: "",
            fotos: [],
            fotos_thumb: []
          }
        ],
        favoriteAds:[
          {
            titulo: "",
            precio: "",
            fotos: [],
            fotos_thumb: []
          }
        ],
        savedSearchs:[],
        videoMute: true
      };
    },
    methods: {
      getFotoFromAd: function (ad){
        return ( ad.fotos_thumb != undefined && ad.fotos_thumb[0] != undefined ) ?  ad.fotos_thumb[0] : ""
      },
      getAdUrl: function (ad) {
        return `http://www.milanuncios.com/anuncios/r${ad.idanuncio}.htm`
      },
      getDate: function (){
        return (this.logedUser != undefined ) ? new Date(this.logedUser.createdAt).toLocaleDateString() : ""
      },
      onSearch: function () {
        const url = `https://www.milanuncios.com/anuncios/${this.searchFormData.keywords}.htm?fromSearch=1`
        window.open(url, '_blank');
      },
      onSubmit: function () {
        console.log(">>>onSubmit")
        this.isLogged = true
        this.loadPage(this.formData)
      },
      onLoadPage: async function(){
        const vm = this
        console.log(">>>onLoadPage")
        try {
          const responseLoginWithCookie = await this.loginWithCookie()
          console.log(">>>loginWithCookie " + JSON.stringify(responseLoginWithCookie))
          let apiToken = responseLoginWithCookie.data.apiToken
          vm.logedUser.email = responseLoginWithCookie.data.user.email
          vm.logedUser.createdAt = responseLoginWithCookie.data.user.createdAt
          const responseLoadPage = await this.loadPage(undefined, apiToken)
          console.log(">>>responseLoadPage " + JSON.stringify(responseLoadPage))
        } catch (err) {
          console.log(JSON.stringify(err));
          console.log("ERROR: ====", err);
        }
      },
      loginWithCookie: function(){
        console.log(">>>loginWithCookie")
        const url = "https://www.milanuncios.com/api/v3/sessions/current"
        const headers = {
          "Content-Type": "application/json",
          "mav": "2",
          "Accept": "*/*",
          "Cache-Control": "no-cache"
        }

        console.log(JSON.stringify(headers))

        return axios({
          method: 'get',
          url: url,
          headers: headers,
          config: { withCredentials: true }
        })
      },
      loadPage: async function (formData, apiToken) {
        console.log(">>>loadPage")
        const vm = this
        let loginResponse = {}
        let apiTokenFinal = apiToken
        if (apiToken == undefined || apiToken.isEmpty) {
          loginResponse = await this.doLogin()
          console.log(">>>doLogin")
          console.log(">>>cookies" + JSON.stringify(loginResponse.headers))
          vm.logedUser.email = loginResponse.data.user.email
          vm.logedUser.createdAt = loginResponse.data.user.createdAt
          console.log(">>>loginResponse: " + JSON.stringify(loginResponse))
          apiTokenFinal = loginResponse.data.session.apiToken
        }
        vm.isLogged = true
        const { header, params } = await this.getHeaderAndQueryParams(apiTokenFinal)
        console.log("h&qp:" + JSON.stringify({ header, params }))
        const adsResponse = await this.getAds(header, params)
        vm.ads = adsResponse.data.data.anuncios
        console.log(JSON.stringify(vm.ads))
        vm.favoriteAds = adsResponse.data.data.anuncios
        const saved = await this.getSavedSearchs(header, params)
        // vm.favoriteAds = favoriteAdsResponse.data.data.anuncios
        // console.log(JSON.stringify(vm.favoriteAds))
        return Promise.resolve(123)
      },
      doLogin: async function () {
        console.log(">>>doLogin")
        const url = "https://www.milanuncios.com/api/v3/logins"
        const data = {
          "identifier": this.formData.email,
          "password": this.formData.password,
          "rememberMe": "true"
        }

        const headers = {
          "Content-Type": "application/json",
          "mav": "2",
          "Accept": "*/*",
          "Cache-Control": "no-cache"
        }

        console.log(JSON.stringify(data))

        return axios({
          method: 'post',
          url: url,
          data: data,
          headers: headers,
          config: { withCredentials: true }
        })

      },
      getHeaderAndQueryParams: async function(apiToken){
        console.log(">>>getHeaderAndQueryParams")
        const params =  {
          "r": "30",
          "p": "1",
          "token": apiToken
        }
        const header = {
          "mav": "2",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          'Content-Type': 'application/json'
        }
        console.log(">>>getHeaderAndQueryParams:" + JSON.stringify({header, params}))
        return new Promise(
                (resolve, reject) => resolve( {header, params})
        )
      },
      getAds: async function (header, params) {
        console.log(">>>getAds:" + JSON.stringify({header, params}))
        const urlMisAnuncios = `https://www.milanuncios.com/api/v2/misanuncios/misanuncios.php?${qs.stringify(params)}`
        console.log(">>>getAds:" + urlMisAnuncios)
        return axios({
          method: 'post',
          url: urlMisAnuncios,
          data: params,
          headers: header,
          config: { withCredentials: true }
        })
      },
      getFavoriteAds: async function (header, params) {
        console.log(">>>getFavoriteAds:" + JSON.stringify({header, params}))
        const urlMisFavoritos = `http://www.millocal.com/api/v1/favoritos/favoritos.php?${qs.stringify(params)}`
        return axios({
          method: 'post',
          url: urlMisFavoritos,
          data: params,
          headers: header,
          config: { withCredentials: true }
        })
      },
      getSavedSearchs: async function (header, params) {
        const url = `https://ms-ma--user-profiles.spain.schibsted.io/users/183565764/savedsearches/?${qs.stringify(params)}`
        return axios({
          method: 'get',
          url: url,
          data: params,
          headers: header,
          config: { withCredentials: true }
          //[{"id":"e03f3ab9-7edb-4019-8b35-7c4e1e187446","userId":"183565764","title":"seat leon en Madrid","status":"ACTIVE","targeting":{"type":"coches","location":{"province":{"id":28}},"category":{"id":100664},"brand":"seat","model":"leon","price":{"from":6000.0,"to":42000.0},"year":{"from":2019.0,"to":2020.0}},"creationDate":"2020-01-28T08:27:32.374","updateDate":"2020-01-28T08:27:32.374"}]
        })
      },
      clearInputs: function (e) {
        if (e.target && e.target.nodeName == "INPUT") {
          e.target.className = "input";
          this.formError[e.target.name] = "";
        }
      },
      showErrors: function (errors) {
        if (errors && typeof errors == "object") {
          errors.forEach(({ path, message }) => {
            this.formError[path] = message;
          });
        }
      },
      onLogout: async function(){
        const vm = this
        const response = await this.logout()
        vm.isLogged = false
      },
      logout: async function () {
        const url = "https://www.milanuncios.com/api/v3/logout"
        return axios({
          method: 'post',
          url: url,
          config: { withCredentials: true }
        })
      },
    },
    created() {

      // this works only with html5 validation
      // this.$multiwatch(
      //         ["formData.username", "formData.email", "formData.password"],
      //         function() {
      //           const valid = this.$refs.form.checkValidity();
      //           this.isDisabled = !valid;
      //         }
      // );
    },
    mounted() {
      this.onLoadPage()
      //document.cookie = "username=John Doe"
      //chrome.cookies.set({ url: "http://example.com/", name: "CookieVar", value: "123", expirationDate: 3600 });
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

  .ma-NavigationHeader-logoLink {
    display: block;
    height: 47px;
    margin: auto;
    text-align: center;
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


</style>
