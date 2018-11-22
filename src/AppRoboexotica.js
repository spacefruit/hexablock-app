/*

  Roboexotica Generator
  (c) 2018 Wizards at Work GmbH
  Author: Moritz Riede <mriede@tuta.io>

  History:

  11 Nov 2018:  Create app
  14 Nov 2018:  Set up controls for the generator
  22 Nov 2018:  CSS refinements, generator functionality

*/

import React, { Component } from 'react';
import moment from 'moment'

import logo from './logo.svg';
import './AppRoboexotica.css';

import RoboexoticaGenerator from './RoboexoticaGenerator'
import story from './story'

class App extends Component {
  constructor(props) {
    super(props);

    let minutesItem = localStorage.getItem('minutes')
    let promilleItem = localStorage.getItem('promille')
    let datetimeItem = localStorage.getItem('datetime')
    let namesItem = localStorage.getItem('names')
    let notesItem = localStorage.getItem('notes')
    let seedItem = localStorage.getItem('seed')
    let typeItem = localStorage.getItem('type')

    // Check if the value has been stored in localStorage before. If yes, use it, if not, fall back to default values.
    this.state = {
      /*depth: 30,
      scale: 1,
      scale2: 0.3,*/
      minutes:  minutesItem ? parseFloat(minutesItem) : 10, // 10
      promille: promilleItem ? parseFloat(promilleItem) : 15, // 15
      datetime: datetimeItem ? datetimeItem : {},
      names:    namesItem ? namesItem : "",
      notes:    notesItem ? notesItem : "",
      seed:     seedItem  ? seedItem : 1337,
      type:     typeItem ? typeItem : 'futuristic',
    }
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
          <img src="waw-logo.svg" className="waw-logo" alt="logo" />
          <h2>Welcome to Roboexotica 2018</h2>
        </div>
        <div className="controls">
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

        <button onClick={this.onClickExportSVG}>Print</button>


          <RoboexoticaGenerator 
            minutes={minutes} 
            promille={promille}
            names={names}
            notes={notes}
            seed={seed}
            type={type}
          />
        </div>
      </div>
    );
  }

  onMinutesChange = (evt) => {
    this.setState({ minutes: parseFloat(evt.target.value) })
    localStorage.setItem('minutes', parseFloat(evt.target.value))
  }

  onPromilleChange = (evt) => {
    this.setState({ promille: parseFloat(evt.target.value) })
    localStorage.setItem('promille', parseFloat(evt.target.value))
  }

  onNamesChange = (evt) => {
    this.setState({ names: evt.target.value })
    localStorage.setItem('names', evt.target.value)
  }

  onNotesChange = (evt) => {
    this.setState({ notes: evt.target.value })
    localStorage.setItem('notes', evt.target.value)

  }

  onDateTimeChange = (evt) => {
    let timestamp = moment(evt.target.value)

    this.setState({ datetime: timestamp })
    localStorage.setItem('datetime', timestamp)

  }

  onSeedChange = (evt) => {
    this.setState({ seed: evt.target.value })
    localStorage.setItem('seed', evt.target.value)
  }
}

export default App;
