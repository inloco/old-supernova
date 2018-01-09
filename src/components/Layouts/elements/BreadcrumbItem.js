import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class BreadcrumbItem extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string
  }

  static defaultProps = {
    className: '',
    url: '#'
  }

  render() {
    const className = classNames('sn-header__title__item', this.props.className)

    return (
      <li className={className}>
        <a href={this.props.url}>
          {this.props.children}
        </a>
      </li>
    )
  }
}

export default BreadcrumbItem