import React from "react"
import PropTypes from "prop-types"
import Input from "./../Input"

class LabelRadioButton extends React.Component {
  static propTyes = {
    label:          PropTypes.string.isRequired,
    name:           PropTypes.string.isRequired,
    value:          PropTypes.string,
    defaultChecked: PropTypes.bool
  }

  static defaultProps = {
    defaultChecked: false
  }

  getInputProps() {
    const{ name, value, defaultChecked } = this.props

    return {
      name,
      defaultChecked,
      value,
      type:       "radio",
      isRequired: false,
      className:  "bs-material"
    }
  }

  render() {
    return (
      <label>
        <Input {...this.getInputProps()}/>
        <span className="circle"></span>
        <span className="check"></span>
        { this.props.label }
      </label>
    )
  }
}

export default LabelRadioButton
