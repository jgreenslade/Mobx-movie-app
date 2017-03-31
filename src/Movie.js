import React, {Component} from 'react';

class Movie extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        <b>{data.title}</b>{" (" + data.release_date + ") - " + data.overview}
      </div>
    )
  }
}

export default Movie;
