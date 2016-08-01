import React, { PropTypes } from "react"
import LabelRadioButton from "./Label"

class RadioButton extends React.Component {
  static propTyes = {
    id:             PropTypes.string.isRequired,
    label:          PropTypes.string.isRequired,
    name:           PropTypes.string.isRequired,
    value:          PropTypes.string,
    defaultChecked: PropTypes.bool
  }

  static defaultProps = {
    defaultChecked: false
  }

  getLabelProps() {
    const{ label, name, value, defaultChecked } = this.props

    return { label, name, value, defaultChecked }
  }

  render() {
    return (
      <div id={this.props.id} className="radio radio-primary">
        <LabelRadioButton {...this.getLabelProps()} />
      </div>
    )
  }
}

export default RadioButton
