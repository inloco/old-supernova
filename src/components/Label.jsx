import React from "react"
import PropTypes from "prop-types"

class Label extends React.Component {
  static propTyes = {
    value: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const{ htmlFor } = this.props

    return (
      <label
        className={`control-label ${this.props.className}`}
        htmlFor={htmlFor ? htmlFor : null}>
        {this.props.value}
      </label>
    )
  }
}

export default Label
