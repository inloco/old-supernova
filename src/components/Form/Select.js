import React, { PropTypes } from 'react'
import Tooltip from './../Tooltip'
import Icon from './../Icons'

class Select extends React.Component {
  render() {
    const { id, label, children, info, ...selectProps } = this.props

    return(
      <div className="sn-select" id={id}>
        <select {...selectProps}>{children}</select>

        <label htmlFor="select" className="sn-field__label sn-field__label--fixed">{label}</label>

        <i className="sn-field__bar"></i>

        {info && this.renderInfo()}

        <span className="sn-form-group__message">
          Error message
        </span>
      </div>
    )
  }

  renderInfo() {
    return (
      <Tooltip
        message={this.props.info}
        position="bottom-left"
      >
        <Icon code="info" />
      </Tooltip>
    )
  }
}

export default Select
