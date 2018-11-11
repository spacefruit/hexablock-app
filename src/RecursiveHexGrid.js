import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SimpleHexGrid.css';


function  getHexPoints(d, startIdx, endIdx, cx = 0, cy = 0) {
  //const cx = 0
  //const cy = 0
  const n = 6

  var points = ""
  for (var i = startIdx; i < endIdx; i++) {
    let a = (i * 2) * Math.PI / n

    let x = cx + d * Math.sin(a)
    let y = cy + d * Math.cos(a)

    if (points !== "") {
      points += " "
    }

    let point = x + "," + y;
    points += point
  }
  return points
}


class RecursiveHexGrid extends Component {
  static propTypes = {
    rows: PropTypes.number,
    cols: PropTypes.number,
    hexDiameter: PropTypes.number,//.isRequired,
    lineColor: PropTypes.string, //.isRequired,
    lineWidth: PropTypes.number, //.isRequired,
  }

  render() {

    let { hexDiameter, lineColor, lineWidth, rows, cols, deltaX, deltaY } = this.props

    var d = hexDiameter
    var dS = Math.sqrt(3) * d / 2


    //var n = 6


    const cx = deltaX * dS
    const cy = deltaY * d

    const points = getHexPoints(d, 2, 6, cx, cy)
    const pointsRight1st = getHexPoints(d, 0, 6, cx, cy)
    const pointsLeft2nd = getHexPoints(d, 2, 7, cx, cy)
    const pointsRight2nd = getHexPoints(d, 1, 6, cx, cy)

    const pointsLeftIsRight2nd = getHexPoints(d, 1, 7, cx, cy)
    const lpointsLeftIsRight2nd = getHexPoints(d, 1, 8, cx, cy)

    const lpoints = getHexPoints(d, 2, 8, cx, cy)
    const lpointsRight1st = getHexPoints(d, 0, 8, cx, cy)
    const lpointsLeft2nd = getHexPoints(d, 2, 8, cx, cy)
    const lpointsRight2nd = getHexPoints(d, 1, 8, cx, cy)



    const oo = 0

    const scaleX = oo + 2*dS
    const scaleY = oo + 1.5*d; // d/2 + dS * Math.cos(2*Math.PI * 60 / 360)

    let dots = []

    for (let y = 0; y < rows; y++) {
      const oddRow = y % 2
      const lastRow = y == rows - 1
      let xOffset = oddRow ? 0.5 : 0
      for (let x = 0; x < cols; x++) {

        let p = lastRow ? lpoints : points

        if (!oddRow) {
          if (x === 0) {
            p = lastRow ? lpointsLeft2nd : pointsLeft2nd
          }
          else if (x == cols - 1) {
            p = lastRow ? lpointsRight2nd : pointsRight2nd
          }
          if (cols == 1) {
            p = lastRow ? lpointsLeftIsRight2nd : pointsLeftIsRight2nd
          }
        }
        else if (x == cols - 1) {
          p = lastRow ? lpointsRight1st : pointsRight1st
        }

        let h = <polyline fill="none" stroke="#5555FF"
                  strokeWidth={lineWidth}
                  points={p}
                  transform={"translate(" + ((x + xOffset) * scaleX) + ", " + (y * scaleY) + ")" }
                />
        dots.push(h)
      }
    }


    const { transform } = this.props


    return (
      <g transform={transform}>
          {dots}
      </g>
    );
  }
}

// Specifies the default values for props:
RecursiveHexGrid.defaultProps = {
    deltaX: 0,
    deltaY: 0,
    transform: null,
    rows: 4,
    cols: 1,
    hexDiameter: 10,
    lineColor: "#5555FF",
    lineWidth: 3
};

export default RecursiveHexGrid
