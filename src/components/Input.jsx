import React, { PropTypes } from 'react'
import Label from './Label'
import Meter from './Meter'

class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    tabIndex: PropTypes.number,
    meter: PropTypes.bool
  }

  static defaultProps = {
    required: false,
    id: null,
    name: null,
    type: 'text',
    tabIndex: 0,
    value: '',
    meter: false
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  getInputClassName() {
    return this.state.value ? 'has-value' : ''
  }

  getErrorClassName() {
    return this.props.error ? 'has-error' : ''
  }

  getAddonClassName() {
    if (this.props.rightAddon) {
      return 'sn-input__addon--right'
    }

    return this.props.leftAddon ? 'sn-input__addon--left' : ''
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

  handleChange(event) {
    event.persist()

    this.setState({
      value: event.target.value
    }, () => {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event)
      }
    })
  }

  renderLabel() {
    const { id, label } = this.props

    if (label) {
      return <Label value={label} htmlFor={id} fixed={this.props.fixed} />
    }
  }

  renderRightAddon() {
    const { rightAddon } = this.props

    if (rightAddon) {
      return <span className="sn-field__addon">{rightAddon}</span>
    }
  }

  renderLeftAddon() {
    const { leftAddon } = this.props

    if (leftAddon) {
      return <span className="sn-field__addon">{leftAddon}</span>
    }
  }

  renderLeftAddon() {
    const { leftAddon } = this.props

    if (leftAddon) {
      return <span className="sn-field__addon">{leftAddon}</span>
    }
  }

  render() {
    return (
      <div className={`sn-input ${this.getErrorClassName()} ${this.getAddonClassName()}`}>
        {this.renderLeftAddon()}
        <input {...this.getInputProps()}/>
        {this.renderLabel()}
        {this.renderRightAddon()}
        <i className="sn-field__bar"></i>
        <span className="sn-form-group__message">
          {this.props.error}
        </span>
        {this.props.meter && <Meter value={this.state.value} />}
      </div>
    )
  }
}

export default Input
