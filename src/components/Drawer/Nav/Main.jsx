import React, { PropTypes } from "react"

class Nav extends React.Component {
  
  render() {
    return (
      <nav className="sn-layout__drawer-navigation">
        {this.props.children}
      </nav>
    )
  }
}

export default Nav