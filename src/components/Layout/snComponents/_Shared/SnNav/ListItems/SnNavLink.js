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
    external: PropTypes.bool
  }

  static defaultProps = {
    href: '',
    target: '_self',
    children: '',
    iconCode: null,
    external: false
  }

  render() {
    return (
      <li className='sn-nav__list__item'>
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
      >
        { this.renderElements() }
      </Link>
    )
  }

  renderElements() {
    const { iconCode } = this.props

    return(
      <React.Fragment>
        { iconCode && <SnNavIcon code={ iconCode } /> }
        <SnNavText>
          { this.props.children }
        </SnNavText>
      </React.Fragment>
    )
  }
}

export default SnNavLink