import React, {Component} from 'react';
import {Link} from 'react-router';

class Artist extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;



    selectArtist(artistId);
  }

  render() {

    return (
      <div>
        <h3>{this.props.artists.name}</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
  );
  }
}

export default Artist;
