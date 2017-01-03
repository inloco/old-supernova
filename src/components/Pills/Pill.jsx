import React, { PropTypes } from "react"

class Pill extends React.Component {
  static propTypes = {
    name:           PropTypes.string,
    value:          PropTypes.string,
    label:          PropTypes.string,
    defaultChecked: PropTypes.bool
  }

  static defaultProps = {
    defaultChecked: false
  }

  getRadioProps() {
    const { name, value, defaultChecked } = this.props

    return { name, value, defaultChecked }
  }

  render() {
    return (
      <label className="sn-pills__label" onClick={this.props.onClick}>
        <input type="radio" {...this.getRadioProps()}/>
        <span className="sn-pills__label--content">
          {this.props.label}
        </span>
      </label>
    )
  }
}

export default Pill