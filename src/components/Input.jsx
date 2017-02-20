import React, { PropTypes } from "react"
import Label from "./Label"

class Input extends React.Component {
  static propTypes = {
    label:        PropTypes.string,
    required:     PropTypes.bool,
    autoFocus:    PropTypes.bool,
    id:           PropTypes.string,
    name:         PropTypes.string,
    type:         PropTypes.string,
    tabIndex:     PropTypes.number,
    meter:        PropTypes.bool
  }

  static defaultProps = {
    required:     false,
    id:           null,
    name:         null,
    type:         "text",
    tabIndex:     0,
    value:        "",
    meter:        false
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  getInputClassName() {
    return this.state.value ? "has-value" : ""
  }

  getErrorClassName() {
    return this.props.error ? "has-error" : ""
  }

  getAddonClassName() {
    if(this.props.rightAddon) {
      return "sn-input__addon--right"
    }

    return this.props.leftAddon ? "sn-input__addon--left" : ""
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  handleChange(event) {
    event.persist()

    this.setState({
      value: event.target.value
    }, () => {
      if(typeof this.props.onChange === "function") {
        this.props.onChange(event)
      }
    })
  }

  getInputProps() {
    const {
      rightAddon,
      leftAddon,
      value,
      error,
      fixed,
      label,
      type,
      meter,
      ...validProps
    } = this.props

    return {
      type,
      ...validProps,
      onChange: this.handleChange.bind(this),
      className: this.getInputClassName(),
      value: this.state.value
    }
  }

  renderLabel() {
    const { id, label } = this.props

    if(label) {
      return <Label value={label} htmlFor={id} fixed={this.props.fixed} />
    }
  }

  renderRightAddon() {
    const { rightAddon } = this.props

    if(rightAddon) {
      return <span className="sn-field__addon">{rightAddon}</span>
    }
  }

  renderLeftAddon() {
    const { leftAddon } = this.props

    if(leftAddon) {
      return <span className="sn-field__addon">{leftAddon}</span>
    }
  }

  renderLeftAddon() {
    const { leftAddon } = this.props

    if(leftAddon) {
      return <span className="sn-field__addon">{leftAddon}</span>
    }
  }

  getProgressBarName(meterValue) {
    const language = window.navigator.language || 'pt-BR'
    const ptBR = ['Muito fraca', 'Fraca', 'Média', 'Forte', 'Muito forte']
    const en = ['Very weak', 'Weak', 'Medium', 'Strong', 'Very strong']
    const name = language === 'pt-BR' ? ptBR : en

    return name[meterValue]
  }

  getMeterValue() {
    const {value} = this.state
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

  renderMeter() {
    const { meter } = this.props
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

    if(meter) {
      return (
        <div className="sn-input__meter-box">
          <p>
            {this.getProgressBarName(value)}
          </p>
          <div style={progressiveBarStyle}>
            <div style={barStyle}></div>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div className={`sn-input ${this.getErrorClassName()} ${this.getAddonClassName()}`}>
        {this.renderLeftAddon()}
        <input {...this.getInputProps()}/>
        {this.renderLabel()}
        {this.renderRightAddon()}
        <i className="sn-field__bar"></i>
        <span className="sn-form-group__message">
          {this.props.error}
        </span>
        {this.renderMeter()}
      </div>
    )
  }
}

export default Input
