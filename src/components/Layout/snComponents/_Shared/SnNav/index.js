import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SnNav extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    isCollapsed: PropTypes.bool,
    drawerIsCollapsed: PropTypes.bool,
    handleObfuscatorClick: PropTypes.func
  }

  static defaultProps = {
    isCollapsed: false
  }

  render() {
    const navClasses = classNames('sn-nav', {
      'is-collapsed': this.props.isCollapsed
    })
    const SnNavList = () => {
      return React.cloneElement(
        this.props.children,
        {
          drawerIsCollapsed: this.props.drawerIsCollapsed,
          handleObfuscatorClick: this.props.handleObfuscatorClick
        }
      )
    }

    return (
      <div className={navClasses}>
        <SnNavList />
      </div>
    )
  }
}

export default SnNav