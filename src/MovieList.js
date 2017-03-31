import {observer} from "mobx-react";
import React, {Component} from 'react';

import Movie from "./Movie";
import MovieResult from "./MovieResult";
import 'bulma/css/bulma.css';

@observer
class MovieList extends Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }

  addMovieToStore(e) {
    if (e.which === 13) {
      this.props.store.addMovie(e.target.value);
      e.target.value = "";
    }
  }

  search(e) {
    if (e.which === 13) {
      this.props.store.search(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    const {filter, watchlist, filteredMovies, searchResults} = this.props.store;
    const items = filteredMovies.map((item) => {
        return <li><Movie
            data={item}
          /></li>;
      });
    const results = searchResults.map((item) => {
      return <li><MovieResult
            data={item}
            store={this.props.store}
          /></li>;
    });

    return (
      <div>
        <h1>Watchlist</h1>
        <input className="input" onKeyPress={this.addMovieToStore.bind(this)} placeholder="add movie..."/>
        <input className="input" value={filter} onChange={this.filter.bind(this)} placeholder="filter..."/>
        <input className="input" onKeyPress={this.search.bind(this)} placeholder="search movies..."/>
        <ul>{items}</ul>

        <div>
          <h1>Results</h1>
          <ul>{results}</ul>
        </div>
      </div>
    )
  }
}

export default MovieList;
