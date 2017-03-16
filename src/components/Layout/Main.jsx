import React, { PropTypes } from 'react'

class Layout extends React.Component {
  static propTypes = {
    drawer: PropTypes.bool
  }

  static defaultProps = {
    drawer: false
  }

  render() {
    const drawerClassName = this.props.drawer ? 'sn-layout--fixed-drawer' : ''

    return (
      <div className="sn-layout__container">
        <div className={`sn-layout ${drawerClassName}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout