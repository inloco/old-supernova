import React, { PropTypes } from "react"

class Pill extends React.Component {
  static propTypes = {
    name:           PropTypes.string,
    value:          PropTypes.string.isRequired,
    label:          PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool
  }

  static defaultProps = {
    defaultChecked: false
  }

  getProps() {
    const { name, value, defaultChecked } = this.props

    return { name, value, defaultChecked }
  }

  render() {
    return (
      <label className="sn-pills__label">
        <input type="radio" {...this.getProps()}/>
        <span className="sn-pills__label--content">
          {this.props.label}
        </span>
      </label>
    )
  }
}

export default Pill