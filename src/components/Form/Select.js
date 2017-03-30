import React, { PropTypes } from "react"

class Select extends React.Component {
  render() {
    const { id, label, children } = this.props

    return(
      <div className="sn-select" id={id}>
        <select>{children}</select>
        <label htmlFor="select" className="sn-field__label sn-field__label--fixed">{label}</label>
        <i className="sn-field__bar"></i>
        <span className="sn-form-group__message">Error message</span>
      </div>
    )
  }
}

export default Select