import React, { PropTypes } from "react"
import Label from "./Label"

class Input extends React.Component {
  static propTypes = {
    label:        PropTypes.string,
    required:     PropTypes.bool,
    autoFocus:    PropTypes.bool,
    id:           PropTypes.string,
    name:         PropTypes.string,
    defaultValue: PropTypes.string,
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

  getInputProps() {
    const {
      id,
      required,
      label,
      defaultValue,
      type,
      name,
      autoFocus,
      tabIndex
    } = this.props

    return {
      id,
      required,
      label,
      defaultValue,
      type,
      name,
      autoFocus,
      tabIndex
    }
  }

  renderLabel() {
    const { id, label } = this.props

    return (
      <Label value={label} htmlFor={id} />
    )
  }

  render() {
    return(
      <div className="sn-input">
        <input {...this.getInputProps()}/>

        {this.props.label ? this.renderLabel() : ""}

        <i className="sn-field__bar"></i>
      </div>
    )
  }
}

export default Input