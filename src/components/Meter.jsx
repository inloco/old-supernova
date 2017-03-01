import React, { PropTypes } from 'react'

class Meter extends React.Component {
  getProgressBarName(meterValue) {
    const language = window.navigator.language || 'pt-BR'
    const ptBR = ['Muito fraca', 'Fraca', 'Média', 'Forte', 'Muito forte']
    const en = ['Very weak', 'Weak', 'Medium', 'Strong', 'Very strong']
    const name = language === 'pt-BR' ? ptBR : en

    return name[meterValue]
  }

  getMeterValue() {
    const {value} = this.props
    let score = 0
    let variationCount = 0
    let letters = {}

    if (!value) return score

    for (var i = 0; i < value.length; i++) {
      letters[value[i]] = (letters[value[i]] || 0) + 1
      score += 5.0 / letters[value[i]]
    }

    var variations = {
      digits: /\d/.test(value),
      lower: /[a-z]/.test(value),
      upper: /[A-Z]/.test(value),
      nonWords: /\W/.test(value),
    }

    for (var check in variations) {
      variationCount += (variations[check] == true) ? 1 : 0
    }

    score += (variationCount - 1) * 10
    score = parseInt(score)

    if (score > 80)
      return 4
    if (score > 60)
      return 3
    if (score >= 30)
      return 2

    return 1
  }

  getMeterColor(meterValue) {
    const color = ['#C6C6C6', '#F44336', '#FFC107', '#8BC34A', '#03A9F4']

    return color[meterValue]
  }

  render() {
    const value = this.getMeterValue()
    const progressiveBarStyle = {
      width: '100%',
      backgroundColor: '#C6C6C6'
    }

    const barStyle = {
      width: `${value * 25}%`,
      height: '5px',
      backgroundColor: this.getMeterColor(value),
      animation: 'progressBar 3s ease-in-out',
      animationFillMode: 'both'
    }

    return (
      <div className="sn-input__meter-box">
        <p>
          {this.getProgressBarName(value)}
        </p>
        <div style={progressiveBarStyle} className="t-progressive-bar">
          <div style={barStyle} className="t-bar-style"></div>
        </div>
      </div>
    )
  }
}

export default Meter
