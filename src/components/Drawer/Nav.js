import React, { PropTypes } from "react"

class Nav extends React.Component {
  renderChildren() {
    return this.props.children.map((child, index) => {
      return React.cloneElement(child, {
        className: "sn-navigation__link",
        key: index
      })
    })
  }

  render() {
    return (
      <nav className="sn-navigation">
        {this.renderChildren()}
      </nav>
    )
  }
}

export default Nav