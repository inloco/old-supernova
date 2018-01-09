import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavLink extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string
  }

  static defaultProps = {
    className: '',
    href: null,
    target: '_self'
  }

  render() {
    return (
      <li className='sn-nav__list__item'>
        {
          this.props.href
          ? this.renderExternalLink()
          : this.renderLink()
        }
      </li>
    )
  }

  renderExternalLink() {
    return (
      <a
        className='sn-nav__list__item__link'
        href={this.props.href}
        target={this.props.target}
      >
        <div className='sn-nav__list__item__text'>
          {this.props.children}
        </div>
      </a>
    )
  }

  renderLink() {
    return (
      <Fragment>
        <Link
          className='sn-nav__list__item__link'
          to={this.props.to}
          target={this.props.target}
        >
          {this.props.icon && this.renderIcon()}
          <div className='sn-nav__list__item__text'>
            {this.props.children}
          </div>
        </Link>
      </Fragment>
    )
  }

  renderIcon() {
    return (
      <div className='sn-nav__list__item__icon'>
        <i className="material-icons">
          {this.props.icon}
        </i>
      </div>
    )
  }
}

export default NavLink