import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SimpleHexGrid.css';
import Complex from "complex.js"




class TwindragonGrid extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,

    depth: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired,

    hexDiameter: PropTypes.number,//.isRequired,
    lineColor: PropTypes.string, //.isRequired,
    lineWidth: PropTypes.number, //.isRequired,
  }

  render() {
    let { depth, scale, hexDiameter, lineColor, lineWidth, width, height } = this.props
    var points = ""
    var n = 6
    var cx = 100
    var cy = 100
    for (var i = 0; i < n; i++) {
      let a = i * 2 * Math.PI / n

      let x = cx + hexDiameter * Math.cos(a)
      let y = cy + hexDiameter * Math.sin(a)

      if (i != 0) {
        points += " "
      }

      let point = x + "," + y;
      points += point
    }


    let base = new Complex(-1, 1)

    let b = []

    for (let i = 0; i < 20; i++) {
      b.push(base.pow(i))
    }



    let dots = []
    for (let i = 0; i < depth; i++) {

      //let p = base.pow(i)
      let p = new Complex(0)
      let ii = i
      let d = 0
      while (ii) {
        if (ii % 2) {
          p = p.add(b[d])
        }
        ii = Math.floor(ii/2)
        d++
      }

      //console.log("jhj", p)
      let c = <polygon fill="none" stroke="#5555FF" 
                strokeWidth={lineWidth}
                points={points} 
                transform={"translate(" + (100+ p.re*scale) + ", " + (100+p.im*scale) + ")" }
              />
      dots.push(c)
    }


    return (
      <div className="SimpleHexGrid-">
        <svg width={width} height={height}>
          { dots }
        </svg>
      </div>
    );

    // <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />

  }
}

// Specifies the default values for props:
TwindragonGrid.defaultProps = {
  width: 640,
  height: 400,
  depth: 4,
  scale: 4,

    hexDiameter: 4,
    lineColor: "#5555FF", 
    lineWidth: 1
};

export default TwindragonGrid
