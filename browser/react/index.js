'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
import Main from './Main.js'
import Sidebar from './Sidebar.js'
import Footer from './Footer.js'
import {Router, Route, hashHistory} from 'react-router';

// class Main extends React.Component {
//   /** Hello world! **/
// }
// module.exports = Main;


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('app')
);
