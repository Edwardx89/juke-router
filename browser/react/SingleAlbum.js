'use strict';
const React = require('react');

class SingleAlbum extends React.Component{
  render(){
    return(
   <div className="album col-xs-10">
  <div>
    <h3>{this.props.selectedAlbum.name}</h3>
    <img src={this.props.selectedAlbum.imageUrl}className="img-thumbnail" />
  </div>
  <table className='table'>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Artists</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <button className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-play"></span>
          </button>
        </td>
        <td>{this.props.selectedAlbum.songs}</td>
        <td>I SHOULD BE A STRING OF THIS SONG'S ARTISTS</td>
        <td>I SHOULD BE A SONG GENRE</td>
      </tr>
      <tr>
        <td>
          <button className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-play"></span>
          </button>
        </td>
        <td>I SHOULD BE ANOTHER SONG NAME</td>
        <td>I SHOULD BE A STRING OF THAT SONG'S ARTISTS</td>
        <td>I SHOULD BE A SONG GENRE</td>
      </tr>
    </tbody>
  </table>
</div>
    )}
}

module.exports = SingleAlbum;