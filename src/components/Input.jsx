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
    tabIndex:     PropTypes.number
  }

  static defaultProps = {
    required:     false,
    id:           null,
    name:         null,
    defaultValue: undefined,
    type:         "text",
    tabIndex:     0
  }

  constructor(props) {
    super(props)

    this.state = {
      hasValue: this.props.defaultValue !== undefined,
      value: this.props.defaultValue
    }
  }

  handleBlur(event) {
    const input    = event.target
    const hasValue = input.value !== ""

    if(hasValue !== this.state.hasValue) {
      this.setState({ hasValue })
    }
  }

  getInputClassName() {
    return this.state.hasValue ? "has-value" : ""
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    },
    () => {
      if(this.props.onChange) {
        this.props.onChange(event)
      }
    })
  }

  getInputProps() {
    const {
      id,
      required,
      label,
      defaultValue,
      type,
      name,
      autoFocus,
      tabIndex,
      onChange
    } = this.props

    return {
      id,
      required,
      label,
      defaultValue,
      type,
      name,
      autoFocus,
      tabIndex,
      onChange:  this.handleChange.bind(this),
      onBlur:    this.handleBlur.bind(this),
      className: this.getInputClassName()
    }
  }

  renderLabel() {
    const { id, label } = this.props

    if(label) {
      return <Label value={label} htmlFor={id} />
    }
  }

  render() {
    return(
      <div className="sn-input">
        <input {...this.getInputProps()}/>
        {this.renderLabel()}
        <i className="sn-field__bar"></i>
      </div>
    )
  }
}

export default Input