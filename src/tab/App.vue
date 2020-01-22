<template>
  <div>
    <section class="uk-container uk-section">
      <div alt="Placeholder image" class="ma-NavigationHeader-logoLink" >
        <a href="http://milanuncios.com" target="_blank" style="text-decoration:none;">
          <img src="https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/logo.2676833a05.svg">
        </a>
      </div>
      <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
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
    </section>
    <!-- login -->
    <section class="uk-container uk-section" v-if="isLogged == false">
      <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light uk-width-1-2@m">
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
                <button v-on:click="onSubmit" class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- end login -->
    <!-- nav bar -->
    <section class="uk-container uk-section" v-if="isLogged == true">
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
                  <ul class="uk-nav-header uk-parent">Your Profile Man!</ul>
                  <ul class="uk-nav uk-nav-default" uk-accordion>
                    <li class="uk-parent">
                      <a href="#" class="uk-accordion-title"><span class="uk-margin-small-right" uk-icon="icon: table"></span>Item</a>
                      <ul class="uk-nav-sub uk-accordion-content">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                      </ul>
                    </li>
                    <li class="uk-parent">
                      <a href="#" class="uk-accordion-title"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a>
                      <ul class="uk-nav-sub uk-accordion-content">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                      </ul>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="uk-width-expand">
              <h6 class="uk-card-subtitle uk-margin-remove-bottom">{{logedUser.email}}</h6>
              <p class="uk-text-meta uk-margin-remove-top">Usuario desde el {{getDate()}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end nav bar -->
    <!-- items -->
    <section class="uk-container uk-section" v-if="isLogged == true">
      <ul uk-tab>
        <li class="uk-active"><a href="#">
          Tus Anuncios
        </a></li>
        <li><a href="#">
          Tus favoritos
        </a></li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <!-- tab 1-->
        <li class="uk-active">
          <article class="uk-comment" v-for="(ad, index) in ads" v-bind:todo="ad" v-bind:key="ad.id">
            <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <a v-bind:href="getAdUrl(ad)" target="_blank" style="text-decoration:none;">
                  <img class="uk-comment-avatar" v-bind:src="getFotoFromAd(ad)" width="80" height="80" alt="">
                </a>
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove">
                  <a class="uk-link-reset" @mouseover="hover = false" @mouseleave="hover = true"
                     v-bind:href="getAdUrl(ad)" target="_blank">{{ad.titulo }}</a>
                </h4>
                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a v-bind:href="getAdUrl(ad)" target="_blank" class="uk-link-reset">{{ad.fecha}}</a></li>
                  <li><a v-bind:href="getAdUrl(ad)" target="_blank" class="uk-link-reset">{{ad.precio}}</a></li>
                </ul>
              </div>
            </header>
          </article>
        </li>
        <!-- tab 2-->
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
          </article>
        </li>
      </ul>
    </section>
    <section>
      <div class="uk-container uk-height-medium" @mouseover="videoMute = false" @mouseleave="videoMute = true">
        <iframe src="https://www.youtube-nocookie.com/embed/KKrEUft8p4g?autoplay=1&amp;controls=1&amp;showinfo=1&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent"
                frameborder="0" ></iframe>

      </div>
    </section>
    <!-- end items -->
    <footer></footer>
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
        hover:true,
        videoMute: false
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
        //if (this.isDisabled) return;
        //this.isDisabled = true;
        //this.isLoading = true;
        this.isLogged = true
        this.login(this.formData)
      },
      loginOld: function ({ email, password }) {
        console.log(">>>login")
        const vm = this
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
          "Cache-Control": "no-cache",
          "Connection": "keep-alive"
        }

        console.log(JSON.stringify(data))

        axios({
          method: 'post',
          url: url,
          data: data,
          headers: headers
        }).then((res) => {
          console.log("RESPONSE ==== : ", res);
          const params =  {
            "r": "30",
            "p": "1",
            "token": res.data.session.apiToken
          }
          const urlMisAnuncios = `https://www.milanuncios.com/api/v2/misanuncios/misanuncios.php?${qs.stringify(params)}`
          const headers2 = {
            "mav": "2",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            'Content-Type': 'application/x-www-form-urlencoded',
            "Connection": "keep-alive",
            "cookie": {
              "PHPSESSID": res.data.session.id,
              "ma_email": res.data.user.email,
              "ma_session_id": res.data.session.id,
              "s": res.data.session.apiToken
            }
          }
          axios({
            method: 'post',
            url: urlMisAnuncios,
            data: params,
            headers: headers2
          }).then((res) => {
            console.log("RESPONSE ==== : ", res)
            vm.ads = res.data.data.anuncios
            console.log(JSON.stringify(vm.ads))
          }).catch((err) => {
            console.log(JSON.stringify(err));
            console.log("ERROR: ====", err);
          })
        }).catch((err) => {
          console.log(JSON.stringify(err));
          console.log("ERROR: ====", err);
        })

      },
      login: async function ({ email, password }) {
        console.log(">>>login")
        const vm = this
        try {
          const loginResponse = await this.doLogin()
          vm.logedUser.email = loginResponse.data.user.email
          vm.logedUser.createdAt = loginResponse.data.user.createdAt
          console.log(">>>loginResponse: " + JSON.stringify(loginResponse))
          const { header, params } = await this.getHeaderAndQueryParams(loginResponse)
          console.log("h&qp:" + JSON.stringify({ header, params }))
          const adsResponse = await this.getAds(header, params)
          vm.ads = adsResponse.data.data.anuncios
          console.log(JSON.stringify(vm.ads))
          vm.favoriteAds = adsResponse.data.data.anuncios
          // const favoriteAdsResponse = await this.getFavoriteAds(header, params)
          // vm.favoriteAds = favoriteAdsResponse.data.data.anuncios
          // console.log(JSON.stringify(vm.favoriteAds))
        } catch (err) {
          console.log(JSON.stringify(err));
          console.log("ERROR: ====", err);
        }
      },
      doLogin: async function () {
        console.log(">>>login")
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
          "Cache-Control": "no-cache",
          "Connection": "keep-alive"
        }

        console.log(JSON.stringify(data))

        return axios({
          method: 'post',
          url: url,
          data: data,
          headers: headers
        })

      },
      getHeaderAndQueryParams: async function(loginResponse){
        console.log(">>>getHeaderAndQueryParams")
        const params =  {
          "r": "30",
          "p": "1",
          "token": loginResponse.data.session.apiToken
        }
        const header = {
          "mav": "2",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          'Content-Type': 'application/json',
          //"Connection": "keep-alive",
          /*"cookie": {
            "PHPSESSID": loginResponse.data.session.id,
            "ma_email": loginResponse.data.user.email,
            "ma_session_id": loginResponse.data.session.id,
            "s": loginResponse.data.session.apiToken
          }*/
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
          headers: header
        })
      },
      getFavoriteAds: async function (header, params) {
        console.log(">>>getFavoriteAds:" + JSON.stringify({header, params}))
        const urlMisFavoritos = `http://www.millocal.com/api/v1/favoritos/favoritos.php?${qs.stringify(params)}`
        return axios({
          method: 'post',
          url: urlMisFavoritos,
          data: params,
          headers: header
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
      }
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


</style>