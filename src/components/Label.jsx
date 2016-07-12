import React, { PropTypes } from "react"

class Label extends React.Component {
  static propTyes = {
    htmlFor: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }

  render() {
    const{ htmlFor, value } = this.props

    return (
      <label className="control-label" htmlFor={ htmlFor }>
        { value }
      </label>
    )
  }
}

export default Label
