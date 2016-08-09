import React, { PropTypes } from "react"

class Group extends React.Component {
  renderChildren() {
    const { name, children } = this.props

    if(name) {
      return children.map((child, index) => {
        return React.cloneElement(child, {
          name: name,
          key:  index
        })
      })
    }

    return children
  }

  render() {
    const { label, id } = this.props

    return(
      <div className="sn-form-group" id={id}>
        <span className="sn-form-group__label">{label}</span>
        {this.renderChildren()}
      </div>
    )
  }
}

export default Group