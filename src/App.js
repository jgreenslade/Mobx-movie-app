import React, {Component} from 'react';
import MovieList from './MovieList';

//styles
import './App.less';
import './App.scss';
import './App.styl';
import styles from './Modules.css';

import store from "./store.js";

class App extends Component {
  render() {
    return (
      <MovieList store={store} />
    )
  }
}

export default App;
