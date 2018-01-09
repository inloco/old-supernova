import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class HeaderLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-layout__main__header', this.props.className)

    return (
      <header className={className}>
        {this.props.children}
      </header>
    )
  }
}

export default HeaderLayout