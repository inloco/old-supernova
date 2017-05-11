import React from 'react'
import PropTypes from 'prop-types'

class Radio extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const value = e.target.value

    this.props.onChange(this.props.numeric ? Number(value) : value)
  }

  render() {
    const { label, numeric, ...inputProps } = this.props

    return (
      <div className="sn-radio">
        <label>
          <input
            type="radio"
            {...inputProps}
            onChange={this.handleInputChange}
          />

          <i className="sn-input__icon"></i>

          {label}
        </label>
      </div>
    )
  }
}

export default Radio
