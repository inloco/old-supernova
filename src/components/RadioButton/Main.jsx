import React, { PropTypes } from "react"
import LabelRadioButton from "./Label"

class RadioButton extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool
  }

  render() {
    const{ id, label, name, checked } = this.props

    return (
      <div id={ id } className="radio radio-primary">
        <LabelRadioButton label={ label } name={ name } checked={ checked }/>
      </div>
    )
  }
}

export default RadioButton
