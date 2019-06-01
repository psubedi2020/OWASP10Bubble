import React from 'react';
var {Link} = require('react-router');

module.exports = React.createClass({
  render() {
    return (
      <div align="center">
        <nav className="navbar">
          <Link to="/bubbleChart">Emergent Bubbles of Volunerbilities</Link>
        </nav>
      </div>
    )
  }
});

