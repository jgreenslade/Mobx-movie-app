import React, {Component} from 'react';

class MovieResult extends Component {

  addMovieWrapper(title) {
      this.props.store.addMovie(this.props.data);
  }

  render() {
    const {store, data} = this.props;
    // const data = store.getMovieById(id);

    return (
      <tr>
        <td>{data.title + " - (" + data.release_date + ") "}</td>
        <td>
          <a className="button is-success is-outlined" onClick={this.addMovieWrapper.bind(this)}> + add</a>
        </td>
      </tr>
    )
  }
}

export default MovieResult;