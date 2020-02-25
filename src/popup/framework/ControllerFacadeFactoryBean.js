import ServiceFactoryBean from "./ServiceFactoryBean"
import {SaveStorageController} from "./controller/storage/SaveStorageController"
import {DoLoginController} from "./controller/DoLoginController";
import {DoLogoutController} from "./controller/DoLogoutController";
import {LoadPageController} from "./controller/LoadPageController";
import {DoRenewAdController} from "./controller/DoRenewAdController";
import {DoAdSearchController} from "./controller/search/DoAdSearchController";

let instance = null

export default class ControllerFacadeFactoryBean {
    constructor() {
        console.log(">>>Init ControllerFacadeFactoryBean")
        
        this._saveStorageController = new SaveStorageController(
            ServiceFactoryBean.saveStorageService()
        )

        this._doLoginController = new DoLoginController(
            ServiceFactoryBean.doLoginService(),
            ServiceFactoryBean.getMyAdsService(),
            ServiceFactoryBean.getMyFavouriteAdsService(),
        )

        this._doLogoutController =  new DoLogoutController(
            ServiceFactoryBean.doLogoutService()
        )

        this._loadPageController = new LoadPageController(
            ServiceFactoryBean.doLoginWithCookiesService(),
            ServiceFactoryBean.getMyAdsService(),
            ServiceFactoryBean.getMyFavouriteAdsService()
        )

        this._doRenewAdController = new DoRenewAdController(
            ServiceFactoryBean.doLoginWithBothService(),
            ServiceFactoryBean.doRenewAdService()
        )

        this._doAdSearchController = new DoAdSearchController(
            ServiceFactoryBean.saveStorageService(),
        )
    }

    static getInstance() {
        if (!instance) {
            instance = new ControllerFacadeFactoryBean();
        }
        return instance
    }

    static saveStorageController() {
        return this.getInstance()._saveStorageController
    }

    static doLoginController() {
        return this.getInstance()._doLoginController
    }

    static doLogoutController() {
        return this.getInstance()._doLogoutController
    }

    static loadPageController() {
        return this.getInstance()._loadPageController
    }

    static doRenewAdController() {
        return this.getInstance()._doRenewAdController
    }

    static doAdSearchController() {
        return this.getInstance()._doAdSearchController
    }
}