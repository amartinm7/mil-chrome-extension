import {DoLoginService} from "../application/user/DoLoginService";
import DoLoginRepository from "./repository/user/DoLoginRepository";
import TransformToCredentialsService from "./transformers/TransformToCredentialsService";
import {DoLogoutService} from "../application/user/DoLogoutService";
import DoLogoutRepository from "./repository/user/DoLogoutRepository";
import {DoRenewAdService} from "../application/ad/DoRenewAdService";
import DoLoginWithCookiesRepository from "./repository/user/DoLoginWithCookiesRepository";
import {DoRenewAdRepository} from "./repository/ad/DoRenewAdRepository";
import {GetMyAdsService} from "../application/ad/GetMyAdsService";
import GetMyAdsRepository from "./repository/ad/GetMyAdsRepository";
import TransformToMyAdsService from "./transformers/TransformToMyAdsService";
import {GetMyFavouriteAdsService} from "../application/ad/GetMyFavouriteAdsService";
import GetMyFavouriteAdsRepository from "./repository/ad/GetMyFavouriteAdsRepository";
import TransformToMyFavouriteAdsService from "./transformers/TransformToMyFavouriteAdsService";
import {DoLoginWithCookiesService} from "../application/user/DoLoginWithCookiesService";
import {DoLoginWithBothService} from "../application/user/DoLoginWithBothService";
import {SaveStorageRepository} from "./repository/storage/SaveStorageRepository";
import {SaveStorageService} from "../application/storage/SaveStorageService";

let instance = null

export default class ServiceFactoryBean{
    constructor() {
        console.log(">>>Init ServiceFactoryBean")
        this._doLoginService = new DoLoginService(
            new DoLoginRepository(),
            new TransformToCredentialsService()
        )
        this._doLoginWithCookiesService = new DoLoginWithCookiesService(
            new DoLoginWithCookiesRepository()
        )
        this._doLoginWithBothService = new DoLoginWithBothService(
            new DoLoginRepository(),
            new DoLoginWithCookiesRepository(),
            new TransformToCredentialsService()
        )
        this._doLogoutService =  new DoLogoutService(
            new DoLogoutRepository()
        )
        this._doRenewAdService = new DoRenewAdService(
            new DoRenewAdRepository()
        )
        this._getMyAdsService = new GetMyAdsService(
            new GetMyAdsRepository(),
            new TransformToMyAdsService()
        )
        this._getMyFavouriteAdsService = new GetMyFavouriteAdsService(
            new GetMyFavouriteAdsRepository(),
            new TransformToMyFavouriteAdsService()
        )
        this._saveStorageService = new SaveStorageService(
            new SaveStorageRepository()
        )
    }

    static getInstance(){
        if (!instance) {
            instance = new ServiceFactoryBean();
        }
        return instance
    }

    static doLoginService() {
        return this.getInstance()._doLoginService
    }

    static doLoginWithCookiesService() {
        return this.getInstance()._doLoginWithCookiesService
    }

    static doLoginWithBothService() {
        return this.getInstance()._doLoginWithBothService
    }

    static doLogoutService() {
        return this.getInstance()._doLogoutService
    }

    static doRenewAdService() {
        return this.getInstance()._doRenewAdService
    }

    static getMyAdsService() {
        return this.getInstance()._getMyAdsService
    }

    static getMyFavouriteAdsService() {
        return this.getInstance()._getMyFavouriteAdsService
    }

    static saveStorageService() {
        return this.getInstance()._saveStorageService
    }
}