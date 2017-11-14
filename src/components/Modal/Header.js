import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from './../Button'
import Icon from './../Icons'

class Header extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    noHoverEffects: PropTypes.bool,
    className: PropTypes.string
  }
  static defaultProps = {
    className: ''
  }

  getClassName() {
    return classNames('sn-modal__header', this.props.className)
  }

  render() {
    return(
      <div className={this.getClassName()}>
        <Button
          onClick={this.context.onClose}
          type="button"
          className="sn-modal__header__close-button"
          noHover={this.props.noHoverEffects}
        >
          <Icon code="&#xE5CD;"/>
        </Button>

        <span className="sn-modal__header__title">{this.props.title}</span>
      </div>
    )
  }
}

Header.contextTypes = {
  onClose: PropTypes.func
}

export default Header
