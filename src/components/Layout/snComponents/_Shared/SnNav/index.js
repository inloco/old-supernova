import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SnNav extends React.Component {
  static propTypes = {
    isCollapsed: PropTypes.bool
  }

  static defaultProps = {
    isCollapsed: false
  }

  render() {
    const navClasses = classNames('sn-nav', {
      'is-collapsed': this.props.isCollapsed
    })

    return (
      <div className={navClasses}>
        { this.props.children }
      </div>
    )
  }
}

export default SnNav