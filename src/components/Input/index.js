import React, { PropTypes } from 'react'
import Label from './../Label'
import Meter from './../Meter'
import Tooltip from './../Tooltip'
import Icon from './../Icons'

class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    tabIndex: PropTypes.number,
    meter: PropTypes.bool,
    info: PropTypes.string,
    leftAddon: PropTypes.any,
    rightAddon: PropTypes.any,
    value: PropTypes.any,
    error: PropTypes.any,
    fixed: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string
  }

  static defaultProps = {
    required: false,
    id: null,
    name: null,
    type: 'text',
    tabIndex: 0,
    value: '',
    meter: false,
    className: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  render() {
    return (
      <div className={this.getWrapperClassName()}>
        {this.props.leftAddon && this.renderLeftAddon()}

        <input {...this.getInputProps()}/>

        {this.props.label && this.renderLabel()}
        {this.props.rightAddon && this.renderRightAddon()}

        <i className="sn-field__bar"></i>

        {this.props.info && this.renderInfo()}

        <span className="sn-form-group__message">
          {this.props.error}
        </span>

        {this.props.meter && <Meter value={this.state.value} />}
      </div>
    )
  }

  getInputClassName() {
    return this.state.value ? 'has-value' : ''
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
      info,
      ...validProps
    } = this.props

    return {
      type,
      ...validProps,
      onChange: this.handleChange,
      className: this.getInputClassName(),
      value: this.state.value
    }
  }

  handleChange(event) {
    const { onChange } = this.props

    event.persist()

    this.setState(
      { value: event.target.value },
      () => onChange && onChange(event)
    )
  }

  renderLabel() {
    return (
      <Label
        value={this.props.label}
        htmlFor={this.props.id}
        fixed={this.props.fixed}
      />
    )
  }

  renderRightAddon() {
    return (
      <span className="sn-field__addon">
        {this.props.rightAddon}
      </span>
    )
  }

  renderLeftAddon() {
    const { leftAddon } = this.props

    if(typeof leftAddon === 'string') {
      return (
        <span className="sn-field__addon">
          {this.props.leftAddon}
        </span>
      )
    }

    return leftAddon
  }

  renderInfo() {
    return (
      <Tooltip
        message={this.props.info}
        position="bottom-left"
      >
        <Icon code="info" />
      </Tooltip>
    )
  }

  getWrapperClassName() {
    return `
      sn-input
      ${this.props.className}
      ${this.getErrorClassName()}
      ${this.getAddonClassName()}
    `
  }

  getErrorClassName() {
    return this.props.error ? 'has-error' : ''
  }

  getAddonClassName() {
    if (this.props.rightAddon) {
      return 'sn-input__addon sn-input__addon--right'
    }

    return this.props.leftAddon ? 'sn-input__addon sn-input__addon--left' : ''
  }
}

export default Input
