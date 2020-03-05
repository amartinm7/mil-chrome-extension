import {DoLoginService} from "../application/user/DoLoginService";
import {DoLogoutService} from "../application/user/DoLogoutService";
import {DoRenewAdService} from "../application/ad/DoRenewAdService";
import {GetMyAdsService} from "../application/ad/GetMyAdsService";
import {GetMyFavouriteAdsService} from "../application/ad/GetMyFavouriteAdsService";
import {DoLoginWithCookiesService} from "../application/user/DoLoginWithCookiesService";
import {DoLoginWithBothService} from "../application/user/DoLoginWithBothService";
import {SaveStorageService} from "../application/storage/SaveStorageService";
import {GetAdStatsService} from "../application/ad/GetAdStatsService";
import RepositoryFactoryBean from "./RepositoryFactoryBean";

let instance = null

export default class ServiceFactoryBean{
    constructor() {
        console.log(">>>Init ServiceFactoryBean")
        this._doLoginService = new DoLoginService(
            RepositoryFactoryBean.doLoginRepository()
        )
        this._doLoginWithCookiesService = new DoLoginWithCookiesService(
            RepositoryFactoryBean.doLoginWithCookiesRepository()
        )
        this._doLoginWithBothService = new DoLoginWithBothService(
            RepositoryFactoryBean.doLoginRepository(),
            RepositoryFactoryBean.doLoginWithCookiesRepository()
        )
        this._doLogoutService =  new DoLogoutService(
            RepositoryFactoryBean.doLogoutRepository()
        )
        this._doRenewAdService = new DoRenewAdService(
            RepositoryFactoryBean.doRenewAdRepository()
        )
        this._getMyAdsService = new GetMyAdsService(
            RepositoryFactoryBean.getMyAdsRepository()
        )
        this._getMyFavouriteAdsService = new GetMyFavouriteAdsService(
            RepositoryFactoryBean.getMyFavouriteAdsRepository()
        )
        this._saveStorageService = new SaveStorageService(
            RepositoryFactoryBean.saveStorageRepository()
        )
        this._getAdStatsService = new GetAdStatsService(
            RepositoryFactoryBean.getAdStatsRepository()
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

    static getAdStatsService() {
        return this.getInstance()._getAdStatsService
    }
}