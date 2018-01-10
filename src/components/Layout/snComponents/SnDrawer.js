import React from 'react'
import PropTypes from 'prop-types'
import SnBrand from './_Shared/SnBrand'

class SnDrawer extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    collapsedSrc: PropTypes.string,
    navItems: PropTypes.element,
    footerItems: PropTypes.element
  }

  render() {
    return (
      <div className='sn-drawer'>
        { this.props.src && this.renderSnBrand() }
        { this.props.navItems }
        { this.props.footerItems && this.renderSnDrawerFoot() }
      </div>
    )
  }

  renderSnBrand() {
    return(
      <SnBrand
        src={ this.props.src }
        alt={ this.props.alt }
        collapsedSrc={ this.props.collapsedSrc }
      />
    )
  }

  renderSnDrawerFoot() {
    return(
      <div className='sn-drawer__footer'>
        { this.props.footerItems }
      </div>
    )
  }
}

export default SnDrawer