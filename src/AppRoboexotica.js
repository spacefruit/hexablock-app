import React, { Component } from 'react';
import logo from './logo.svg';
import './AppRoboexotica.css';

import SimpleHexGrid from './SimpleHexGrid'
import RecursiveHexGrid from './RecursiveHexGrid'
import TwindragonGrid from './TwindragonGrid'
import TriangleHexGrid from './TriangleHexGrid'
import RoboexoticaGenerator from './RoboexoticaGenerator'

import story from './story'
import meSpeak from './mespeak/mespeak.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*depth: 30,
      scale: 1,
      scale2: 0.3,*/
      minutes: 10,
      promille: 15,
      datetime: null,
      names:    "",
      notes:    "",
      seed:     1337,
      type:     'futuristic',
    }

    console.log(story)
  }

  onMinutesChange = (evt) => {
    this.setState({ minutes: parseFloat(evt.target.value) })
  }

  onPromilleChange = (evt) => {
    this.setState({ promille: parseFloat(evt.target.value) })
  }

  onNamesChange = (evt) => {
    this.setState({ names: evt.target.value })
  }

  onNotesChange = (evt) => {
    this.setState({ notes: evt.target.value })
  }

  onDateTimeChange = (evt) => {
    this.setState({ datetime: evt.target.value })
  }

  onSeedChange = (evt) => {
    this.setState({ seed: evt.target.value })
  }



  onClickExportSVG = (evt) => {
    let document = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n"
    document += this.svgRef.innerHTML
    window.location.href = "data:application/svg+xml;base64," + window.btoa(document)
  }

  setSvgRef = (elem) => {
    this.svgRef = elem
  }

  getSpeechURL = (text, language) => {
    if (!language) language = "en";
    var x = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + text +"&tl=" + language;
    //x = "http://translate.google.com/translate_tts?ie=UTF-8&q=" + text +"&tl=en&total=1&idx=0&textlen=23&prev=input";
    return x.replace(/ /g, "%20");
  }



  render() {
    const { minutes, promille, names, notes, datetime, seed, type } = this.state

    const ox = 100
    const oy = 100

    const t1="translate(" + (ox) + ", " + (oy) + ")"
    const t2="translate(" + (ox) + ", " + (oy) + ")"

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Roboexotica 2018</h2>
        </div>
        <div class="controls">
        minutes {minutes} <input type="range" id="myMinutes" min={1} max={100}
          value={minutes} onChange={this.onMinutesChange}
        />
        promille {promille.toFixed(2)} <input type="range" id="myPromille" min={0} max={5} step={0.05}
          value={promille} onChange={this.onPromilleChange}
        />

        <input type="text" id="myNames" placeholder="Names" value={names} onChange={this.onNamesChange} />
        <input type="textarea" id="notes" placeholder="Notes" value={notes} onChange={this.onNotesChange} />
        <input type="number" placeholder="Seed" value={seed} onChange={this.onSeedChange} />
        <input type="datetime-local" value={datetime} onChange={this.onDateTimeChange} /> 

        <select id="myStyle">
          <option value="futuristic">Futuristic</option>
          <option value="retro">Retro</option>
          <option value="jugendstil">Jugendstil</option>
        </select>

        <button onClick={this.onClickExportSVG}>Export SVG</button>

          {/*<TwindragonGrid depth={depth} scale={scale}/>


          transform={"translate(" + (x + xOffset) * scaleX) + ", " + (y * scaleY) + ")" }

          */}
          <br />
          <div ref={this.setSvgRef}>
            <svg>
            
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
