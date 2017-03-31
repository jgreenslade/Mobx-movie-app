import {computed, autorun, observable} from "mobx";

import {searchMovies} from "./async";

class Store {
    @observable watchlist = [];
    @observable filter = "";
    @computed get filteredMovies() {
        const matchesFilter = new RegExp(this.filter, "i");
        return this.watchlist.filter(movie => !this.filter || matchesFilter.test(movie.title) || matchesFilter.test(movie.overview));
    };
    @observable searchResults = [];

    addMovie(value) {
        this.watchlist.push(value);
    }

    search(title) {
       searchMovies(title).then((results) => {
           console.log(results); 
           this.searchResults = results.results;
       });
    }
}

var store = window.store = new Store;

export default store;