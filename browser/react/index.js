'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
import Main from './Main.js'
import Sidebar from './Sidebar.js'
import Footer from './Footer.js'
// class Main extends React.Component {
//   /** Hello world! **/
// }
// module.exports = Main;


ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
