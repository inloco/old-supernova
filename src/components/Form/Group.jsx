import React, { PropTypes } from "react"

class Group extends React.Component {
  render() {
    const { label, children, id } = this.props

    return(
      <div className="sn-form-group" id={id}>
        <span className="sn-form-group__label">{label}</span>
        {children}
      </div>
    )
  }
}

export default Group