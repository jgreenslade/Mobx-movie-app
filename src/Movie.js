import React, {Component} from 'react';

class Movie extends Component {
  render() {
    const {data} = this.props;
    return (
      <tr>
        <td>
          <b>{data.title + " (" + data.release_date + ")"}</b>
        </td>
        <td>
          {data.overview}
        </td>
        <td>
          <a className="button is-danger is-outlined"> &times; remove</a>
        </td>
      </tr>
    )
  }
}

export default Movie;
