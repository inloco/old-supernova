import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    error: PropTypes.any
  }

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