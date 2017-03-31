import React, {Component} from 'react';

class MovieResult extends Component {

  addMovieWrapper(title) {
      this.props.store.addMovie(this.props.data);
  }

  render() {
    const {store, data} = this.props;

    return (
      <h2>{data.title + " - (" + data.release_date + ")"}
        <a className="button" onClick={this.addMovieWrapper.bind(this)}>add</a>
      </h2>
    )
  }
}

export default MovieResult;