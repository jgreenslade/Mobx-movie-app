import {autorun, observable} from "mobx";

class Store {
    @observable watchlist = ["Logan"];
    @observable filter = "";
}

var store = window.store = new Store;

export default store;