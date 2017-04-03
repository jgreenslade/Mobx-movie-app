import React, {Component} from 'react';
import MovieList from './MovieList';

import store from "./store.js";

import styles from "./App.scss";

class App extends Component {
  render() {
    return (
      <MovieList store={store} />
    )
  }
}

export default App;
