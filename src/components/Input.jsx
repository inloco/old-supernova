import React, { PropTypes } from "react"
import Label from "./Label"
import _ from "lodash"

class Input extends React.Component {
  static propTypes = {
    label:        PropTypes.string,
    required:     PropTypes.bool,
    autoFocus:    PropTypes.bool,
    id:           PropTypes.string,
    name:         PropTypes.string,
    type:         PropTypes.string,
    tabIndex:     PropTypes.number
  }

  static defaultProps = {
    required:     false,
    id:           null,
    name:         null,
    type:         "text",
    tabIndex:     0,
    value:        ""
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  getInputClassName() {
    return this.state.value === "" ? "" : "has-value"
  }

  getErrorClassName() {
    return this.props.error ? 'has-error' : ''
  }

  getAddonClassName() {
    return this.props.addon ? 'sn-input__addon--right' : ''
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
    const { addon, value, error, fixed, label, ...validProps } = this.props

    return {
      ...validProps,
      onChange: this.handleChange.bind(this),
      className: this.getInputClassName(),
      value: this.state.value
    }
  }

  renderLabel() {
    const { id, label } = this.props

    if(label) {
      return <Label value={label} htmlFor={id} />
    }
  }

  renderAddon() {
    const { addon } = this.props

    if(addon) {
      return <span className="sn-field__addon">{addon}</span>
    }
  }

  render() {
    return(
      <div className={`sn-input ${this.getErrorClassName()} ${this.getAddonClassName()}`}>
        <input {...this.getInputProps()}/>
        {this.renderLabel()}
        {this.renderAddon()}
        <i className="sn-field__bar"></i>
        <span className="sn-form-group__message">{this.props.error}</span>
      </div>
    )
  }
}

export default Input