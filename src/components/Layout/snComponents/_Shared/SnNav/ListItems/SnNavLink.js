import React from 'react'
import PropTypes from 'prop-types'
import SnNavText from './../SnNavText'
import SnNavIcon from './../SnNavIcon'
import { Link } from 'react-router-dom'

class SnNavLink extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.string,
    iconCode: PropTypes.string,
    iconSrc: PropTypes.string,
    iconAlt: PropTypes.string,
    external: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    href: '#',
    target: null,
    children: '',
    iconCode: null,
    external: false,
    iconAlt: ''
  }

  render() {
    return (
      <li
        className='sn-nav__list__item'
        onClick={ this.context.handleCloseDrawerClick }
      >
        { this.props.external ? this.renderExternalLink() : this.renderLink() }
      </li>
    )
  }

  renderExternalLink() {
    return (
      <a
        className='sn-nav__list__item__link'
        href={ this.props.href }
        target={ this.props.target }
        onClick={this.handleOnClick}
      >
        { this.renderElements() }
      </a>
    )
  }

  renderLink() {
    return (
      <Link
        className='sn-nav__list__item__link'
        to={this.props.href}
        target={this.props.target}
        onClick={this.handleOnClick}
      >
        { this.renderElements() }
      </Link>
    )
  }

  renderElements() {
    const { iconCode, iconSrc, iconAlt } = this.props

    return(
      <React.Fragment>
        { iconCode && <SnNavIcon code={ iconCode } /> }
        { iconSrc && <img src={ iconSrc } alt={ iconAlt } /> }
        <SnNavText>
          { this.props.children }
        </SnNavText>
      </React.Fragment>
    )
  }

  handleOnClick = (e) => {
    const { onClick } = this.props

    if(onClick) {
      e && e.stopPropagation()

      onClick()
    }
  }
}

SnNavLink.contextTypes = {
  handleCloseDrawerClick: PropTypes.func
}

export default SnNavLink
