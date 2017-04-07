import React, {Component} from 'react';

class Movie extends Component {

  removeMovieWrapper() {
    this.props.store.removeMovie(this.props.id);
  }

  render() {
    const {id, store} = this.props;
    const data = store.getMovieById(id)[0];

    return (
      <tr>
        <td>
          <b>{data.title + " (" + data.release_date + ")"}</b>
        </td>
        <td>
          {data.overview}
        </td>
        <td>
          <a className="button is-danger is-outlined" onClick={this.removeMovieWrapper.bind(this)}> &times; remove</a>
        </td>
      </tr>
    )
  }
}

export default Movie;
