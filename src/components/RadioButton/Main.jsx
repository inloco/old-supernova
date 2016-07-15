import React, { PropTypes } from "react"
import LabelRadioButton from "./Label"

class RadioButton extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const{ id, label, name } = this.props

    return (
      <div id={ id } className="radio radio-primary">
        <LabelRadioButton label={ label } name={ name } />
      </div>
    )
  }
}

export default RadioButton
