import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  static propTyes = {
    childer: PropTypes.node.isRequired
  }

  render() {
    const{ children } = this.props

    return (
      <header className="header">
        <div className="header-col header-left">
          <span className="icon-24 icon-menu toggle-nav"></span>
        </div>
        <div className="header-col header-title page-title">
          <div className="breadcrumbs">
            { children }
          </div>
        </div>
      </header>
    )
  }
}

export default Header
