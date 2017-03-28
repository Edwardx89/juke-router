'use strict';
const React = require('react');


class Albums extends React.Component{
  render(){
     const albums = this.props.albums.map((album, index) => {
      return (<div key = {index+1} className="col-xs-4">
        <a className="thumbnail" href="#" onClick={() => this.props.handleClick(album)}>
          <img src= {album.imageUrl} />
          <div className="caption">
            <h5>
              <span> {album.name} </span>
            </h5>
            <small>{album.songs.length} songs</small>
          </div>
        </a>
      </div>
      )
    })
    return (<div> {albums} </div>);
  }
}

module.exports = Albums
