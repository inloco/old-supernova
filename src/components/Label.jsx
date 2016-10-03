import React, { PropTypes } from "react"

class Label extends React.Component {
  static propTyes = {
    value: PropTypes.string.isRequired,
    htmlFor: PropTypes.string
  }

  render() {
    const{ htmlFor, value } = this.props

    return (
      <label className="control-label" htmlFor={ htmlFor ? htmlFor : null }>
        { value }
      </label>
    )
  }
}

export default Label
