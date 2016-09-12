import React, { PropTypes } from "react"

class Label extends React.Component {
  static propTypes = {
    htmlFor: PropTypes.string,
    value:   PropTypes.string.isRequired
  }

  render() {
    const{ htmlFor, value } = this.props

    return (
      <label
        className={`sn-field__label ${this.props.fixed ? 'sn-field__label--fixed' : ''}`}
        htmlFor={htmlFor}>
        { value }
      </label>
    )
  }
}

export default Label
