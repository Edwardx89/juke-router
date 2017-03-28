'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import Albums from './Albums.js';
import SingleAlbum from './SingleAlbum.js';

import axios from 'axios';

const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);



class Main extends React.Component {
constructor () {
    super();
    this.state = { albums: [], selectedAlbum: {}};
    this.handleClick = this.handleClick.bind(this);
}
handleClick(album){
  this.setState({selectedAlbum: album})
  console.log(album)
}
componentDidMount(){
    axios.get('/api/albums')
    .then(response => {
      return response.data;
    })
    .then(albums =>{
      albums = albums.map(album => {
        album.imageUrl = `/api/albums/${album.id}/image`;
        return album;
      });
      this.setState({albums});
    })
    .catch(function(err){
    console.error(err);
  });
}
  render() {

    return (
      <div>
        <Sidebar />
        <div className="col-xs-10">
          <h3>Albums</h3>
          <div className="row">
          <Albums albums={this.state.albums} handleClick={this.handleClick} />
          <SingleAlbum selectedAlbum={this.state.selectedAlbum} />
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

module.exports = Main;
