import React, { PropTypes } from "react"

class Header extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <header className="sn-layout__header sn-presentation-header">
        <div aria-expanded="false" role="button" tabIndex="0" className="sn-layout__drawer-button">
          <i className="material-icons"></i>
        </div>

        <div className="sn-layout__header-row">
          <span className="sn-layout-title">{this.props.children}</span>
        </div>
      </header>
    )
  }
}

export default Header
