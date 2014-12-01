/** @jsx React.DOM */

var React = require('React');

var Test = require('./Test');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Test />
      </div>
    );
  },
});

React.render(
  <App />,
  document.getElementById('app')
);
