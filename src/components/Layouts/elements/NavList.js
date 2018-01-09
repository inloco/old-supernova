import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    maxHeight: PropTypes.number
  }

  static defaultProps = {
    className: '',
    maxHeight: null
  }

  render() {
    const { maxHeight } = this.props

    const className = classNames('sn-nav__list', this.props.className)

    const style = (
      this.props.maxHeight
      ? { maxHeight: `${maxHeight}px`, overflowY: 'scroll' }
      : {}
    )

    return (
      <ul className={className} style={style}>
        {this.props.children}
      </ul>
    )
  }
}

export default NavList