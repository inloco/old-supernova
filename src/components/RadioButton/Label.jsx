import React, { PropTypes } from "react"
import Input from "./../Input"

class LabelRadioButton extends React.Component {
  static propTyes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool
  }

  render() {
    const{ label, name, checked } = this.props

    return (
      <label>
        <Input type="radio"
               isRequired={ false }
               className={ "bs-material" }
               name={ name }
               checked={ checked } />
        <span className="circle"></span>
        <span className="check"></span>
        { label }
      </label>
    )
  }
}

export default LabelRadioButton
