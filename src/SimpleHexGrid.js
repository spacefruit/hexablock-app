import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SimpleHexGrid.css';

class SimpleHexGrid extends Component {
  static propTypes = {
    hexDiameter: PropTypes.number,//.isRequired,
    lineColor: PropTypes.string, //.isRequired,
    lineWidth: PropTypes.number, //.isRequired,
  }

  render() {
    
    var d = 20
    var points = ""
    var n = 6
    var cx = 100
    var cy = 100
    for (var i = 0; i < n; i++) {
      let a = (i+0.5) * 2 * Math.PI / n

      let x = cx + d * Math.cos(a)
      let y = cy + d * Math.sin(a)

      if (i != 0) {
        points += " "
      }

      let point = x + "," + y;
      points += point
    }

    let { hexDiameter, lineColor, lineWidth} = this.props




    return (
      <div className="SimpleHexGrid-">
        <svg width="600" height="400">
        <polygon fill="none" stroke="#5555FF" 
            strokeWidth={lineWidth}
            points={points} />


        </svg>
      </div>
    );

      /* <polyline fill="none" stroke="#5555FF" 
            strokeWidth={lineWidth}
            points={points} />
            */
    // <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />

  }
}

export default SimpleHexGrid
