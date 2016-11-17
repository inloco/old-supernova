import React, { PropTypes } from "react"

class Label extends React.Component {
  static propTyes = {
    value: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const{ htmlFor, value } = this.props

    return (
      <label
        className={`control-label ${this.props.className}`}
        htmlFor={ htmlFor ? htmlFor : null }>
        { value }
      </label>
    )
  }
}

export default Label
