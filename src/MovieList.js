import {observer} from "mobx-react";
import React, {Component} from 'react';

import Movie from "./Movie";
import MovieResult from "./MovieResult";
// import 'bulma/css/bulma.css';

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
    const items = filteredMovies.map((item, key) => {
        return <Movie
            data={item}
            key={key}
          />;
      });
    const results = searchResults.map((item, key) => {
      return <MovieResult
            data={item}
            store={this.props.store}
            key={key}
          />;
    });

    return (
      <div className="content">
        <h1>Watchlist App</h1>
        
        {/* Manage your watchlist */}
        <div className="columns">
          <div className="column">
            <input className="input" onKeyPress={this.addMovieToStore.bind(this)} placeholder="add movie..."/>
            <input className="input" value={filter} onChange={this.filter.bind(this)} placeholder="filter..."/>
          </div>
          <div className="column">
             <input className="input" onKeyPress={this.search.bind(this)} placeholder="search movies..."/>
          </div>
        </div>

        {/* Search for and add movies*/}
        <div className="columns">
          <div className="column">
            <h1>Watchlist</h1>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Description</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </div>
          <div className="column">
            <h1>Results</h1>
            <table>
              <tr>
                  <td>Title</td>
                  <td></td>
                </tr>
              <tbody>{results}</tbody>
            </table>
          </div>  
        </div>
      </div>
    )
  }
}

export default MovieList;
