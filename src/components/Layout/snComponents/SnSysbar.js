import React from 'react'
import PropTypes from 'prop-types'
import SnDrawerButton from './_Shared/SnDrawerButton'
import SnBrand from './_Shared/SnBrand'
import SnNav from './_Shared/SnNav'

class SnSysbar extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleDrawerButtonClick: PropTypes.func,
    navIsCollapsed: PropTypes.bool,
    navItems: PropTypes.element
  }

  static defaultProps = {
    navIsCollapsed: false
  }

  render() {
    return (
      <div className='sn-sysbar'>
        <SnDrawerButton onClick={ this.props.handleDrawerButtonClick } />
        <SnBrand src={ this.props.src } alt={ this.props.alt } />
        { this.props.navItems && this.renderSnNav() }
      </div>
    )
  }

  renderSnNav() {
    return React.cloneElement(
      this.props.navItems, { isCollapsed: this.props.navIsCollapsed }
    )
  }
}

export default SnSysbar