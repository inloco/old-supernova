import React from 'react'
import PropTypes from 'prop-types'
import SnBrand from './../_Shared/SnBrand'

class SnDrawer extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    collapsedSrc: PropTypes.string,
    nav: PropTypes.element,
    footer: PropTypes.element,
    drawerIsCollapsed: PropTypes.bool,
    handleObfuscatorClick: PropTypes.func
  }

  render() {
    console.log('passei by SnDrawer', this.props.handleObfuscatorClick)
    const SnNav = () => {
      return React.cloneElement(
        this.props.nav,
        {
          drawerIsCollapsed: this.props.drawerIsCollapsed,
          handleObfuscatorClick: this.props.handleObfuscatorClick
        }
      )
    }

    return (
      <div className='sn-drawer'>
        { this.props.src && this.renderSnBrand() }
        <SnNav />
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