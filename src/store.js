import {computed, autorun, observable} from "mobx";

import {searchMovies} from "./async";

class Store {
    @observable watchlist = [];
    @observable searchResults = [];
    @observable cache = [];
    @observable filter = "";

    @computed get filteredMovies() {
        const matchesFilter = new RegExp(this.filter, "i");

        return this.watchlist.filter((movieId) => {
            const movie = this.getMovieById(movieId);
            return !this.filter || matchesFilter.test(movie.title) || matchesFilter.test(movie.overview);
        });
    };

    addMovie(value) {
        // Add movie to cache and id to watchlist
        this.cacheMovie(value);
        this.watchlist.push(value.id);
        console.log("addMovie called", value);
    }

    removeMovie(value) {
        if (value > -1){
            this.watchlist.splice(this.watchlist.indexOf(value), 1);
        }
        console.log("removeMovie called", value);
    }

    getMovieById(id) {
         console.log("getMovieById called", id);
        return this.cache.filter((item) => {
            return item.id === id;
        });
        
    }

    cacheMovie(value) {
        const item = this.cache.filter((item) => {
            return item.id === value.id;
        });
        if (!item.length) {
            this.cache.push(value);
        }
        console.log("cacheMovie called" + caches.object);
    }

    search(title) {
       searchMovies(title).then((results) => {
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