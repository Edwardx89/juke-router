import React from 'react';
import {Link} from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
        <ul>
          <li><Link to={`/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists`}>ARTISTS</Link></li>
        </ul>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;

