import React from 'react'
import PropTypes from 'prop-types'
import SnBrand from './_Shared/SnBrand'

class SnDrawer extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    collapsedSrc: PropTypes.string,
    navItems: PropTypes.element,
    footer: PropTypes.element
  }

  render() {
    return (
      <div className='sn-drawer'>
        { this.props.src && this.renderSnBrand() }
        { this.props.navItems }
        { this.props.footer }
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
}

export default SnDrawer