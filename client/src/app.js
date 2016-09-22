var React = require('react');
var ReactDOM = require('react-dom');

var MineBox = require('./components/MineBox.jsx')

window.onload = function(){
  ReactDOM.render(
    <MineBox></MineBox>,
    document.getElementById('app')
  );
}
