import {observer} from "mobx-react";
import React, {Component} from 'react';

import Movie from "./Movie";

@observer
class MovieList extends Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }

  addMovie(e) {
    if (e.which === 13) {
      this.props.store.addMovie(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    const {filter, watchlist, filteredMovies} = this.props.store;
    const items = filteredMovies.map((item) => {
        return <li><Movie 
            title={item}
          /></li>;
      });

    return (
      <div>
        <h1>Watchlist</h1>
        <div>{filter}</div>
        <input classname="create" onKeyPress={this.addMovie.bind(this)} placeholder="add movie"/>
        <input classname="filter" value={filter} onChange={this.filter.bind(this)} placeholder="filter"/>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default MovieList;
