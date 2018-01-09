import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavInfo extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-nav__list__info', this.props.className)

    return (
      <li className={className}>
        {this.props.value}
      </li>
    )
  }
}

export default NavInfo