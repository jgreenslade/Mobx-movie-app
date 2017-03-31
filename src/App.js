import React, {Component} from 'react';
import MovieList from './MovieList';

import store from "./store.js";

class App extends Component {
  render() {
    return (
      <MovieList store={store} />
    )
  }
}

export default App;
