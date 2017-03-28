import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory } from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={AppContainer} />
  </Router>,
  document.getElementById('app')
);
