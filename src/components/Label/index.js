import React from 'react'
import PropTypes from 'prop-types'

class Label extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    htmlFor: PropTypes.string
  }

  render() {
    const{htmlFor, value} = this.props

    return (
      <label
        className={`sn-field__label ${this.props.fixed ? "sn-field__label--fixed" : ""}`}
        htmlFor={htmlFor}
      >
        {value}
      </label>
    )
  }
}

export default Label
