import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavList extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-nav__list', this.props.className)

    return (
      <ul className={className}>
        {this.props.children}
      </ul>
    )
  }
}

export default NavList