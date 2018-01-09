import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Nav extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
  }

  static defaultProps = {
    className: '',
    theme: null
  }

  render() {
    const {
      className,
      theme
    } = this.props

    const componentClasses = classNames('sn-nav', className, {
      [`sn-nav--${theme}-theme`]: theme
    })

    return (
      <nav className={componentClasses}>
        {this.props.children}
      </nav>
    )
  }
}

export default Nav