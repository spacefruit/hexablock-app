import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleHexGrid from './SimpleHexGrid'
import RecursiveHexGrid from './RecursiveHexGrid'
import TwindragonGrid from './TwindragonGrid'
import TriangleHexGrid from './TriangleHexGrid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depth: 30,
      scale: 1,
      scale2: 0.3,
      cols: 10,
      rows: 15,
    }
  }

  onColsChange = (evt) => {
    this.setState({ cols: parseInt(evt.target.value) })
  }

  onRowsChange = (evt) => {
    this.setState({ rows: parseInt(evt.target.value) })
  }

  onColsChange = (evt) => {
    this.setState({ cols: parseInt(evt.target.value) })
  }

  onDepthChange = (evt) => {
    this.setState({ depth: parseInt(evt.target.value) })
  }

  onScaleChange = (evt) => {
    this.setState({ scale: parseFloat(evt.target.value) })
  }
  onScale2Change = (evt) => {
    this.setState({ scale2: parseFloat(evt.target.value) })
  }



  onClickExportSVG = (evt) => {
    let document = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n"
    document += this.svgRef.innerHTML
    window.location.href = "data:application/svg+xml;base64," + window.btoa(document)
  }

  setSvgRef = (elem) => {
    this.svgRef = elem
  }



  render() {
    const { depth, scale, scale2, rows, cols } = this.state

    const ox = 100
    const oy = 100

    const t1="translate(" + (ox) + ", " + (oy) + ")"
    const t2="translate(" + (ox) + ", " + (oy) + ")"

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        cols <input type="range" id="myCols" min={1} max={100}
          value={cols} onChange={this.onColsChange}
        />
        rows <input type="range" id="myRows" min={1} max={80}
          value={rows} onChange={this.onRowsChange}
        />


        size {depth} <input type="range" id="myDepth" min={1} max={200}
          value={depth} onChange={this.onDepthChange}
        />
        scale {scale} <input type="range" id="myScale" min={0.01} step={0.01} max={5}
          value={scale} onChange={this.onScaleChange}
        />

        scale2 {scale2} <input type="range" id="myScale2" min={0.01} step={0.01} max={5}
          value={scale2} onChange={this.onScale2Change}
        />

        new slider <input type="range" id="newSlider" min={0.01} step={0.01} max={5} />

        <button onClick={this.onClickExportSVG}>Export SVG</button>

          {/*<TwindragonGrid depth={depth} scale={scale}/>


          transform={"translate(" + (x + xOffset) * scaleX) + ", " + (y * scaleY) + ")" }

          */}
          <br />
          <div ref={this.setSvgRef}>
            <svg width="3000" height="3000">
            <RecursiveHexGrid rows={rows} cols={cols} lineWidth={scale} hexDiameter={depth} transform={t1} />
            <TriangleHexGrid rows={rows} cols={cols} lineWidth={scale2} hexDiameter={depth} transform={t1} />
        {/*
            <RecursiveHexGrid rows={rows*2} cols={cols*2} lineWidth={scale} hexDiameter={depth/2} transform={t2} deltaX={1} deltaY={-0.5}/>

            <RecursiveHexGrid rows={rows*4} cols={cols*4} lineWidth={scale} hexDiameter={depth/4} transform={t2} deltaX={1} deltaY={-1.5}/>

            <RecursiveHexGrid rows={rows*8} cols={cols*8} lineWidth={scale} hexDiameter={depth/8} transform={t2} deltaX={1} deltaY={-3.5}/>
            <RecursiveHexGrid rows={rows*16} cols={cols*16} lineWidth={scale} hexDiameter={depth/16} transform={t2} deltaX={1} deltaY={-7.5}/>
          */}
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
