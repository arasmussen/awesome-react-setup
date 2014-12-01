/** @jsx React.DOM */

var React = require('React');

var Test = React.createClass({
  render: function() {
    return (
      <div className="test">
        <p>Hello awesome react setup!</p>
      </div>
    );
  },
});

module.exports = Test;
