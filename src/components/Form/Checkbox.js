import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {
  render() {
    const { id, label, error, ...inputProps } = this.props

    return(
      <div className="sn-checkbox" id={id}>
        <label>
          <input type="checkbox" {...inputProps}/>
          <i className="sn-input__icon"></i>
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox