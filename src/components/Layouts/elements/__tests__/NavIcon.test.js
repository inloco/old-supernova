import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavIcon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    code: PropTypes.string,
    src: PropTypes.string
  }

  static defaultProps = {
    className: '',
    code: null,
    src: null
  }

  render() {
    const className = classNames('sn-nav__list__item__icon', this.props.className)

    return (
      <div className={className}>
        {
          this.props.code
          ? this.renderIcon()
          :this.renderImage()
        }
      </div>
    )
  }

  renderIcon() {
    return (
      <i className="material-icons">
        {this.props.code}
      </i>
    )
  }

  renderImage() {
    return (
      <img src={this.props.src} />
    )
  }
}

export default NavIcon