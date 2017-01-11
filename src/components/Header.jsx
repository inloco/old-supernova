import React, { PropTypes } from "react"

class Header extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <header className="sn-layout__header">
        <div className="sn-layout__drawer-button" aria-expanded="false" role="button" tabIndex="0">
          <i className="material-icons">&#xE5D2;</i>
        </div>
        <div className="sn-layout__title-group">
          <div className="sn-layout__title-wrap">
            <span className="sn-layout__title">{this.props.children}</span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
