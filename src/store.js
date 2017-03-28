import {computed, autorun, observable} from "mobx";

class Store {
    @observable watchlist = ["Logan", "The Evil Dead", "Get Out"];
    @observable filter = "";
    @computed get filteredMovies() {
        const matchesFilter = new RegExp(this.filter, "i");
        return this.watchlist.filter(movie => !this.filter || matchesFilter.test(movie));
    }

    addMovie(value) {
        this.watchlist.push(value);
    }

    fetchMovies() {
        async.se
    }
}

var store = window.store = new Store;

export default store;