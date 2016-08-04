import React, { PropTypes } from "react"

class Checkbox extends React.Component {
  render() {
    const { id, label } = this.props

    return(
      <div className="sn-checkbox" id={id}>
        <label>
          <input type="checkbox"/>
          <i className="sn-input__icon"></i>
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox