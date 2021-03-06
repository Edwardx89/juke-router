import React from 'react';
import {Link} from 'react-router';

const Artists = (props) => {

	const artists = props.artists;
	const selectedArtist = props.selectedArtist;
	return (
		<div>
		  <h3>Artists</h3>
		    <div className="list-group">
		    {
		      props.artists.map(artist => {
						console.log(artist.id)
		        return (
		          <div className="list-group-item" key={artist.id}>
		            <Link to={`/artists/${artist.id}`}> { artist.name }</Link>
		          </div>
		        )
		      })
		    }
		  </div>
		</div>
	)


}

export default Artists;
