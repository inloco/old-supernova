import React, { PropTypes } from "react"
import LabelRadioButton from "./Label"

class RadioButton extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    inputValue: PropTypes.string
  }

  static defaultProps = {
    isChecked: false
  }

  render() {
    const{ id, label, name, isChecked, inputValue } = this.props

    return (
      <div id={ id } className="radio radio-primary">
        <LabelRadioButton label={ label }
                          name={ name }
                          isChecked={ isChecked }
                          inputValue={ inputValue } />
      </div>
    )
  }
}

export default RadioButton
