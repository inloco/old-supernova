import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Breadcrumb extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-header__title', this.props.className)

    return (
      <ul className={className}>
        {this.props.children}
      </ul>
    )
  }
}

export default Breadcrumb