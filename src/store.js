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

/* Changes to structure.
    Goals:
        avoid reloading already fetched details (enabling caching should help too)
        use ids for stuff so you don't have to do complex operations to add or remove

    Changes:
        store {
            watchlist: [1, 11, 23, ...],
            filter: "",                          // fine as is
            searchResults: [{...}, {...}, ...],  // fine as is
            cachedMovies: [{...},  {...}, ...],  // Any movie that's been added to the watchlist should be cached so that add remove ops are easy
        }
*/

var store = window.store = new Store;

export default store;