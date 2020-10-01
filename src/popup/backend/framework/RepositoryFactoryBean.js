import {DoRenewAdRepository} from "./repository/ad/DoRenewAdRepository";
import {DoLoginRepository} from "./repository/user/DoLoginRepository";
import {DoLoginWithCookiesRepository} from "./repository/user/DoLoginWithCookiesRepository";
import {DoLogoutRepository} from "./repository/user/DoLogoutRepository";
import {GetAdStatsRepository} from "./repository/ad/GetAdStatsRepository";
import {GetMyAdsRepository} from "./repository/ad/GetMyAdsRepository";
import {GetMyFavouriteAdsRepository} from "./repository/ad/GetMyFavouriteAdsRepository";
import {SaveStorageRepository} from "./repository/storage/SaveStorageRepository";
import {GetCategoriesSuggestedRepository} from "./repository/category/GetCategoriesSuggestedRepository";

//framework dependencies
const axios = require ("axios")
const fetch = require('node-fetch')
const querystring = require ("querystring")
const storage = require("chrome-storage")

let instance = null

export default class RepositoryFactoryBean{

    constructor({axios, querystring, storage, fetch}) {
        console.log(">>>Init RepositoryFactoryBean")
        this._doRenewAdRepository = new DoRenewAdRepository(axios)

        this._getAdStatsRepository = new GetAdStatsRepository(axios)

        this._getMyAdsRepository = new GetMyAdsRepository(axios,querystring)

        this._getMyFavouriteAdsRepository =  new GetMyFavouriteAdsRepository(axios,querystring)

        this._saveStorageRepository = new SaveStorageRepository(storage)

        this._doLoginRepository = new DoLoginRepository(axios)

        this._doLoginWithCookiesRepository = new DoLoginWithCookiesRepository(axios)

        this._doLogoutRepository = new DoLogoutRepository(axios)

        this._getCategoriesSuggestedRepository = new GetCategoriesSuggestedRepository(axios, querystring, fetch)
    }

    static getInstance(){
        if (!instance) {
            instance = new RepositoryFactoryBean(this._getDependencies());
        }
        return instance
    }

    static _getDependencies(){
        return {
            axios,
            querystring,
            storage,
            fetch
        }
    }

    static doRenewAdRepository() {
        return this.getInstance()._doRenewAdRepository
    }

    static getAdStatsRepository() {
        return this.getInstance()._getAdStatsRepository
    }

    static getMyAdsRepository() {
        return this.getInstance()._getMyAdsRepository
    }

    static getMyFavouriteAdsRepository() {
        return this.getInstance()._getMyFavouriteAdsRepository
    }

    static saveStorageRepository() {
        return this.getInstance()._saveStorageRepository
    }

    static doLoginRepository() {
        return this.getInstance()._doLoginRepository
    }

    static doLoginWithCookiesRepository() {
        return this.getInstance()._doLoginWithCookiesRepository
    }

    static doLogoutRepository() {
        return this.getInstance()._doLogoutRepository
    }

    static getCategoriesSuggestedRepository() {
        return this.getInstance()._getCategoriesSuggestedRepository
    }
}