import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './RoboexoticaGenerator.css';

class RoboexoticaGenerator extends Component {
  static propTypes = {
    minutes:  PropTypes.number,
    promille: PropTypes.number,
    names:    PropTypes.string,
    notes:    PropTypes.string,
    datetime: PropTypes.object,
    seed:     PropTypes.number,
    type:     PropTypes.string
  }

  formatDate = function (datum) {
    var date = new Date(datum);
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  }

  render() {
    let { minutes, promille, names, notes, datetime, seed, type} = this.props

    return (
      <div className="cert-wrapper">
        <div className="cert">
          <h1>Zertifikat</h1>
          <div className="item">
            Hiermit wird amtlich bestätigt, dass <b className="names">{names}</b> am
          </div>
          <div className="item date">{moment(datetime).format("DD.MM.YYYY")}</div>
          <div className="item">um</div>
          <div className="item time">{moment(datetime).format("HH:MM")}</div>
          <p className="item">
            mit <b>0.0‰</b> das Experiment begonnen und nach {minutes} Minuten <b>{promille}‰</b> Alkohol in der Atemluft hatte.  
          </p>
          <p className="item signature">
            Wien, am {moment().format("DD.MM.YYYY")}
          </p>
        </div>
      </div>
    );
  }
}

export default RoboexoticaGenerator
