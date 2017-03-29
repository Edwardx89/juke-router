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
    console.log(this.props);
    console.log('running?');

    const albums = this.props.albums.map( album => {
        return(
            <div>
              <div className="col-xs-10">{album.name}</div>
              <div className="col-xs-10">{album.songs.length} songs</div>
            </div>
          )
      });

    const songs = this.props.songs.map(song => {

      return (
          <div>
            <div className="col-xs-10">{selectedArtist.songNames}</div>
            <div >{selectedArtist.songUrls} songs</div>
          </div>
        )

    })

    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        {albums}
      </div>
  );
  }
}

export default Artist;
