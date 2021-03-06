import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    drawerIsOpen: PropTypes.bool
  }

  render() {
    const layoutClasses = classNames('sn-layout', {
      'sn-layout--open-drawer': this.props.drawerIsOpen
    })

    return (
      <div className={layoutClasses}>
        { this.props.children }
      </div>
    )
  }
}

export default Layout