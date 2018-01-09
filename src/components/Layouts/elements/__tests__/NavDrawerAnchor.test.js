import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavDrawerAnchor extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    className: '',
    onClick: () => {}
  }

  render() {
    const className = classNames('sn-drawer-button', this.props.className)

    return (
      <button
        className={className}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default NavDrawerAnchor