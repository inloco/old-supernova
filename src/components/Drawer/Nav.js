import React, { PropTypes } from "react"

class Nav extends React.Component {
  renderChildren() {
    return this.props.children.map((child, index) => {
      return React.cloneElement(child, {
        className: "sn-layout__drawer-navigation__link",
        key: index
      })
    })
  }

  render() {
    return (
      <nav className="sn-layout__drawer-navigation">
        {this.renderChildren()}
      </nav>
    )
  }
}

export default Nav