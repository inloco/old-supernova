import React from 'react'
import PropTypes from 'prop-types'

class Radio extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    numeric: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
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

  handleInputChange(e) {
    const value = e.target.value

    this.props.onChange(this.props.numeric ? Number(value) : value)
  }
}

export default Radio
