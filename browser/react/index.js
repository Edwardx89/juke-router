import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
    	<IndexRedirect to='/albums'/>
    	<Route path='/albums' component={Albums}></Route>
    	<Route path="/albums/:albumId" component={Album}></Route>
    	<Route path='/artists' component={Artists}></Route>
      <Route path='/artists/:artistId' component={Artist}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);





///***** GOT STUCK RENDERING SINGLE ALBUM:
// problem: (1) nested where we should have nested: we put our singles into albums, which doesn't make sense, because the one should *replace* the one, rather than *appear within* it
