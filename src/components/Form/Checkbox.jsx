import React, { PropTypes } from "react"

class Checkbox extends React.Component {
  render() {
    const { id, label, name } = this.props

    return(
      <div className="sn-checkbox" id={id}>
        <label>
          <input type="checkbox" name={name} />
          <i className="sn-input__icon"></i>
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox