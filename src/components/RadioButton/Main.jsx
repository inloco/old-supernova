import React, { PropTypes } from "react"
import LabelRadioButton from "./Label"

class RadioButton extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string
  }

  render() {
    const{ id, label, name, inputValue } = this.props

    return (
      <div id={ id } className="radio radio-primary">
        <LabelRadioButton label={ label }
                          name={ name }
                          inputValue={ inputValue } />
      </div>
    )
  }
}

export default RadioButton
