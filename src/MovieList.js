import {observer} from "mobx-react";
import React, {Component} from 'react';

@observer
class MovieList extends Component {
  render() {
    return (
      <h1>{this.props.store.watchlist[0]}</h1>
    )
  }
}

export default MovieList;
